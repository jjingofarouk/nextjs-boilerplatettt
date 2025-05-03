import { prisma } from '../prisma';
import { Opportunity } from '../types/opportunity';

export async function fetchOpportunities({
  page = 1,
  limit = 10,
  category,
  search,
}: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}): Promise<Opportunity[]> {
  return prisma.opportunity.findMany({
    where: {
      category: { slug: category },
      title: { contains: search, mode: 'insensitive' },
    },
    take: limit,
    skip: (page - 1) * limit,
    include: { category: true },
  });
}

export async function fetchOpportunityById(id: string): Promise<Opportunity> {
  return prisma.opportunity.findUniqueOrThrow({
    where: { id: parseInt(id) },
    include: { category: true },
  });
}

export async function fetchOpportunitiesByCategory(slug: string): Promise<Opportunity[]> {
  return prisma.opportunity.findMany({
    where: { category: { slug } },
    include: { category: true },
  });
}

export async function fetchSavedOpportunities(userId: number): Promise<Opportunity[]> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { saved: { include: { category: true } } },
  });
  return user?.saved || [];
}

export async function fetchUserApplications(userId: number) {
  return prisma.application.findMany({
    where: { userId },
    include: { opportunity: true },
  });
}
