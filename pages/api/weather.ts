import { NextApiRequest, NextApiResponse } from 'next';
import weatherService from '~/utils/weather';
import mapService from '~/utils/map';
import misc from '~/utils/misc';

// * 배너 로직
// * 날씨 데이터를 받아오고 캐슁

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
