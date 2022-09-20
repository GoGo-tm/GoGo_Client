import { NextApiRequest, NextApiResponse } from 'next';

import * as mapService from '~/utils/map';
import * as misc from '~/utils/misc';
import * as weatherService from '~/utils/weather';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { latitude, longitude, city } = req.query as {
    latitude: string;
    longitude: string;
    city: string;
  };

  const { nx, ny } = mapService.mapToGrid(latitude, longitude);

  const weather = await weatherService.getWeather({
    url: misc.env('NEXT_PUBLIC_WEATHER_END_POINT'),
    apiKey: misc.env('NEXT_PUBLIC_WEATHER_API_KEY'),
    nx,
    ny,
  });

  return res.json({
    ...weather,
    city,
  });
}
