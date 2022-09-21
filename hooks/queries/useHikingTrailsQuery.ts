import { useQuery } from '@tanstack/react-query';

import QueryKeys from '~/constants/queries';
import { HikingTrailResponseResults } from '~/types/hikingTrails';

export default function useHikingTrailsQuery(query: string, options?: {}) {
  return useQuery<HikingTrailResponseResults, Error>(
    [QueryKeys.HIKING_TRAILS_QUERY_KEY],
    () =>
      fetch(
        `${process.env.NEXT_PUBLIC_URL}/server/api/hiking-trails${query}`
      ).then((res) => res.json()),
    options
  );
}
