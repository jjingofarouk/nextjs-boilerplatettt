import { prisma } from '../prisma';
import { Category } from '../types/category';

export async function fetchCategories(): Promise<Category[]> {
  return prisma.category.findMany();
}
