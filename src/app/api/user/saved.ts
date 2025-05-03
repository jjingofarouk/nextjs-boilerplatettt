import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, {});

  if (!session || !session.user || !session.user.email) {
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
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        saved: { connect: { id: opportunityId } },
      },
      include: { saved: true },
    });
    return res.status(200).json(updatedUser.saved);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}