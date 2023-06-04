import axios from 'axios';

import { ServerResponseResults } from '~/types/base';
import { HikingLogDto } from '~/types/mylogs';

import * as misc from './misc';

export const getMylogsByQuery = async ({
  lastId,
  size,
  accessToken,
}: {
  lastId?: number;
  size: number;
  accessToken: string;
}): Promise<ServerResponseResults<HikingLogDto>> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/server/api/hiking-log`,
      {
        params: {
          lastId,
          size,
        },
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

export const getYoutubeThumbnailUrl = (url?: string) => {
  const videoId = url?.split('youtu.be/')[1];
  if (!videoId) {
    return undefined;
  }
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};
