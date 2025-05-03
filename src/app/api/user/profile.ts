import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, {});

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    return res.status(200).json(user);
  }

  if (req.method === 'PUT') {
    const { name } = req.body;
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: { name },
    });
    return res.status(200).json(user);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
