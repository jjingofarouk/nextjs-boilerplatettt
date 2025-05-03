import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, {});

  if (!session || session.user.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Access denied' });
  }

  const { id } = req.body;

  await prisma.opportunity.delete({ where: { id: parseInt(id) } });

  return res.status(204).json({ message: 'Deleted' });
}
