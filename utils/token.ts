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

    return res.data;
  } catch (e) {
    throw new Error(misc.getErrorMessage(e));
  }
};
export const isTokenExpired = (expiry: number) => {
  const shouldRefreshTime = Math.round(expiry - 60 * 60 * 1000 - Date.now());
  if (shouldRefreshTime > 0) return true;
  return false;
};
