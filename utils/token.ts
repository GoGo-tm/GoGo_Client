import axios from 'axios';
import misc from './misc';

const tokenService = {
  accessToken: () => {},
  refreshToken: async (accessToken: string, refreshToken: string) => {
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
  },
  isTokenExpired: (expiry: number) => {
    const shouldRefreshTime = Math.round(expiry - 60 * 60 * 1000 - Date.now());
    if (shouldRefreshTime > 0) return true;
    return false;
  },
};

export default tokenService;
