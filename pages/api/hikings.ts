import { NextApiRequest, NextApiResponse } from 'next';
import { getPlaiceholder } from 'plaiceholder';

import { ServerResponseResults } from '~/types/base';
import { HikingTrailDto } from '~/types/hikingTrails';
import * as misc from '~/utils/misc';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { size = '5', order = 'POPULARITY' } = req.query;

  if (typeof size !== 'string' || typeof order !== 'string')
    throw new Error('invalid query');

  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_URL
      }/server/api/hiking-trails${misc.makeQueries({
        order,
        size,
      })}`
    );

    if (!response.ok) throw new Error('invalid api');

    const hikings: ServerResponseResults<HikingTrailDto> =
      await response.json();

    const baseImg = '/images/등산_기본이미지.png';

    const withBase64 = await Promise.all(
      hikings.contents.map(async (hiking) => {
        const { base64 } = await getPlaiceholder(
          hiking.imageUrl ? hiking.imageUrl : baseImg
        );

        return {
          ...hiking,
          base64,
          imageUrl: hiking.imageUrl ? hiking.imageUrl : baseImg,
        };
      })
    ).then((v) => v);

    return res.status(200).json({
      ...hikings,
      contents: withBase64,
    });
  } catch (error) {
    throw new Error(misc.getErrorMessage(error));
  }
}
