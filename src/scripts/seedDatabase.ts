import { prisma } from '@/lib/prisma';

async function seed() {
  await prisma.category.createMany({
    data: [
      { name: 'Grants', slug: 'grants' },
      { name: 'Scholarships', slug: 'scholarships' },
    ],
  });

  await prisma.opportunity.createMany({
    data: [
      {
        title: 'Sample Grant',
        description: 'A sample grant opportunity.',
        categoryId: 1,
        deadline: new Date('2025-12-31'),
      },
    ],
  });
}

seed().catch((e) => console.error(e)).finally(() => prisma.$disconnect());
