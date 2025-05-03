import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  const opportunities = await prisma.opportunity.findMany({
    where: {
      OR: [
        { title: { contains: query as string, mode: 'insensitive' } },
        { description: { contains: query as string, mode: 'insensitive' } },
      ],
    },
    include: { category: true },
  });

  return res.status(200).json(opportunities);
}
