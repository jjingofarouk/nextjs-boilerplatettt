import { prisma } from '../prisma';
import { Opportunity } from '../types/opportunity';

export async function searchOpportunities(query: string): Promise<Opportunity[]> {
  return prisma.opportunity.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
      ],
    },
    include: { category: true },
  });
}
