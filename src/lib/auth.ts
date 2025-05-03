import NextAuth, { DefaultSession } from 'next-auth';

// Extend the Session type to include role
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
    // Example: Credentials provider (replace with your actual provider)
    {
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Replace with your authentication logic (e.g., Prisma query)
        if (credentials?.email === 'admin@example.com' && credentials?.password === 'password') {
          return { id: '1', name: 'Admin', email: 'admin@example.com', role: 'ADMIN' };
        }
        return null;
      },
    },
  ],
  callbacks: {
    async session({ session, user }) {
      // Add role to session
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
