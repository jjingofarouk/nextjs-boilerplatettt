'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import FormInput from '../ui/FormInput';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, redirect: true, callbackUrl: '/' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <FormInput label="Email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput label="Password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Login
      </button>
    </form>
  );
}
