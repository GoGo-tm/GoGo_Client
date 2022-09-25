import axios from 'axios';

import * as misc from './misc';

export const refreshToken = async (
  accessToken: string,
  refreshToken: string
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/reissue`,
      {
        accessToken,
        refreshToken,
      }
    );

    const newToken = await res.data;

    return newToken;
  } catch (e) {
    throw new Error(misc.getErrorMessage(e));
  }
};
export const isTokenExpired = (expiry: number) => {
  if (expiry < Date.now()) return true;
  return false;
};
