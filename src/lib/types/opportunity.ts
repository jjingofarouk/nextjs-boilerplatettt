export interface Opportunity {
  id: number;
  title: string;
  description: string;
  category: { id: number; name: string; slug: string };
  categoryId: number;
  deadline?: Date;
  link?: string;
  createdAt: Date;
  updatedAt: Date;
}
