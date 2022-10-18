import NextAuth, { DefaultSession, User } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken: string;
    accessTokenExpiresIn: number;
    user: {} & DefaultSession['user'];
    [key: string]: unknown;
  }
  interface User {
    accessToken: string;
    accessTokenExpiresIn: string;
    refreshToken: string;
  }
}
