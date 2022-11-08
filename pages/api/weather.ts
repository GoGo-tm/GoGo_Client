import { NextApiRequest, NextApiResponse } from 'next';
import { getPlaiceholder } from 'plaiceholder';

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

  try {
    const weather = await weatherService.getWeather({
      url: misc.env('NEXT_PUBLIC_WEATHER_END_POINT'),
      apiKey: misc.env('NEXT_PUBLIC_WEATHER_API_KEY'),
      nx,
      ny,
    });

    if (!weather) throw new Error('invalid api');

    const { base64: landingBase64 } = await getPlaiceholder(weather.landingImg);
    const { base64: weatherBase64 } = await getPlaiceholder(weather.weatherImg);

    const withBase64 = {
      ...weather,
      landingBase64,
      weatherBase64,
    };

    return res.json({
      ...withBase64,
      city,
    });
  } catch (error) {
    throw new Error(misc.getErrorMessage(error));
  }
}
