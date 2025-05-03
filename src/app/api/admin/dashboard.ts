import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, {});

  if (!session || !session.user || session.user.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Access denied' });
  }

  return res.status(200).json({ message: 'Admin dashboard data' });
}
