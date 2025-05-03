import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, {});

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    const saved = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { saved: true },
    });
    return res.status(200).json(saved?.saved);
  }

  if (req.method === 'POST') {
    const { opportunityId } = req.body;
    await prisma.user.update({
      where: { email: session.user.email },
      data: { saved: { connect: { id: parseInt(opportunityId) } } },
    });
    return res.status(200).json({ message: 'Saved' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
