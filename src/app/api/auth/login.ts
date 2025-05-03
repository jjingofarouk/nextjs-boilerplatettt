import { NextApiRequest, NextApiResponse } from 'next';
import { signIn } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;
  const result = await signIn('credentials', {
    redirect: false,
    email,
    password,
  });

  if (result?.error) {
    return res.status(401).json({ message: result.error });
  }

  return res.status(200).json({ message: 'Logged in' });
}
