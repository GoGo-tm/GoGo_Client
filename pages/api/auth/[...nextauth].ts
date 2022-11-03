import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import * as misc from '~/utils/misc';
import * as tokenService from '~/utils/token';
import * as userService from '~/utils/user';

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
      async authorize(credentials) {
        try {
          const user = await userService.signIn(credentials as SignInProps);

          if (user) {
            return {
              ...user,
              email: credentials?.email,
              name: credentials?.email,
              image: null,
            };
          }

          return null;
        } catch (e) {
          throw new Error(misc.getErrorMessage(e));
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.accessTokenExpiresIn = user.accessTokenExpiresIn;
        token.refreshToken = user.refreshToken;
      }
      const userInfo = await userService.getUserInfo(
        token.accessToken as string
      );

      if (userInfo) {
        token.nickname = userInfo.nickname;
        token.type = userInfo.type;
      }

      if (tokenService.isTokenExpired(token.accessTokenExpiresIn as number)) {
        const { accessToken, refreshToken, accessTokenExpiresIn } =
          await tokenService.refreshToken(
            token.accessToken as string,
            token.refreshToken as string
          );
        if (accessToken && refreshToken) {
          return {
            ...token,
            accessToken,
            refreshToken,
            accessTokenExpiresIn,
          };
        }
        return {
          ...token,
          accessTokenExpiresIn: 0,
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.nickname = token.nickname as string;
      session.type = token.type as string;
      session.accessToken = token.accessToken as string;
      session.accessTokenExpiresIn = token.accessTokenExpiresIn as number;

      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url === '/auth/signUp') return `${baseUrl}/auth/signUp`;
      return baseUrl;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, settings);
