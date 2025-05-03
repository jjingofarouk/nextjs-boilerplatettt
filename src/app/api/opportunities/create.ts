import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, {});

  if (!session || session.user.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Access denied' });
  }

  const { title, description, categoryId, deadline, link } = req.body;

  const opportunity = await prisma.opportunity.create({
    data: { title, description, categoryId, deadline, link },
  });

  return res.status(201).json(opportunity);
}
