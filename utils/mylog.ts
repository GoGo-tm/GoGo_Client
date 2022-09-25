import axios from 'axios';

import * as misc from './misc';

export const getMylogById = async (
  id: string | string[],
  accessToken: string
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/server/api/hiking-log/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = response.data;

    return data;
  } catch (error) {
    throw new Error(misc.getErrorMessage(error));
  }
};
