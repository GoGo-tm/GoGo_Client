import { useQuery } from '@tanstack/react-query';
import QueryKeys from '~/constants/queries';

interface Weather {
  content: string;
  landingImg: string;
  weatherImg: string;
  city: string;
}

export default function useWeather(options?: {}) {
  return useQuery<Weather, Error>(
    [QueryKeys.WEATHER_KEY],
    () =>
      fetch(`${process.env.NEXT_PUBLIC_URL}/api/weather`).then((res) =>
        res.json()
      ),
    options
  );
}
