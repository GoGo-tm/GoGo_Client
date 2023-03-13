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
  const [baseDate, baseHour] = weatherService.getBaseTime();
  const { nx, ny } = mapService.mapToGrid(latitude, longitude);
  const url = misc.env('NEXT_PUBLIC_WEATHER_END_POINT');
  const apiKey = misc.env('NEXT_PUBLIC_WEATHER_API_KEY');

  const _res = await fetch(
    `${url}?serviceKey=${apiKey}&numOfRows=10&pageNo=1&base_date=${baseDate}&base_time=${
      baseHour + '00'
    }&nx=${nx}&ny=${ny}&dataType=JSON`
  );

  if (!_res.ok)
    return res
      .status(502)
      .json({ message: '날씨예보 Api 불러오기에 실패했습니다.' });

  const data = await _res.json();

  if (data.response.header.resultCode !== '00')
    return res.status(501).json({
      message: data.response.header.resultMsg,
    });

  const weather = weatherService.getPtyOrSkyOfItems(
    data.response.body.items.item
  );

  if (!weather)
    return res
      .status(500)
      .json({ message: '날씨예보 로직에서 문제가 발생했습니다.' });

  const { base64: landingBase64 } = await getPlaiceholder(weather.landingImg);
  const { base64: weatherBase64 } = await getPlaiceholder(weather.weatherImg);

  const withBase64 = {
    ...weather,
    landingBase64,
    weatherBase64,
  };

  return res.status(200).json({
    ...withBase64,
    city,
  });
}
