import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

export const options: NextAuthOptions = {
  providers: [
    // http://localhost:3000/api/auth/providers
    // default sign in = http://localhost:3000/api/auth/signin
    // default sign out = http://localhost:3000/api/auth/signout
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  // pages option to define custom routes for the signIn / signUp pages
  // pages: {
  //     signIn: '/signIn'
  // }
};
