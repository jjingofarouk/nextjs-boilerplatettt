import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, limit = 10, category, search } = req.query;

  const opportunities = await prisma.opportunity.findMany({
    where: {
      category: { slug: category as string },
      title: { contains: search as string, mode: 'insensitive' },
    },
    take: parseInt(limit as string),
    skip: (parseInt(page as string) - 1) * parseInt(limit as string),
    include: { category: true },
  });

  return res.status(200).json(opportunities);
}
