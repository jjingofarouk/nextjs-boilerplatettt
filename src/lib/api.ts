import { prisma } from './prisma';

export async function fetchUserApplications(userId: string) {
  const applications = await prisma.application.findMany({
    where: { userId: parseInt(userId) },
    include: { opportunity: true },
  });
  return applications;
}