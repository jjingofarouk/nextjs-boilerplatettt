export interface Application {
  id: number;
  userId: number;
  opportunityId: number;
  opportunity: { title: string };
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
