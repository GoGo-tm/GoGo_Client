import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import misc from '~/utils/misc';
import type { NextAuthOptions } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import userService from '~/utils/user';

interface SignInProps {
  email: string;
  password: string;
}

export const settings: NextAuthOptions = {
  debug: process.env.NODE_ENV === 'development',
  secret: misc.env('NEXT_PUBLIC_SESSION_SECRET'),
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: misc.env('NEXT_PUBLIC_JWT_SECRET'),
  },
  providers: [
    CredentialsProvider({
      name: 'GoGo_Credentials',
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      authorize(credentials) {
        const res = userService.signIn(credentials as SignInProps);
        return {
          res,
        };
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: '/auth/login',
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, settings);
