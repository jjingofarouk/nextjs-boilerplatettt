import NextAuth, { DefaultSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

declare module 'next-auth' {
  interface Session {
    user: {
      role: 'USER' | 'ADMIN';
    } & DefaultSession['user'];
  }
  interface User {
    role: 'USER' | 'ADMIN';
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.email === 'admin@example.com' && credentials?.password === 'password') {
          return { id: '1', name: 'Admin', email: 'admin@example.com', role: 'ADMIN' };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user && user) {
        session.user.role = user.role as 'USER' | 'ADMIN';
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
};

export default NextAuth(authOptions);
