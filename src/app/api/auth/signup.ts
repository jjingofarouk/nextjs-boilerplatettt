import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password, name } = req.body;

  try {
    const user = await prisma.user.create({
      data: { email, name, password }, // Note: Hash password in production
    });
    return res.status(201).json({ message: 'User created', user });
  } catch (error) {
    return res.status(400).json({ message: 'Error creating user' });
  }
}
