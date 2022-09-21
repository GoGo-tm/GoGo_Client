import { useQuery } from '@tanstack/react-query';

import QueryKeys from '~/constants/queries';
import { ServerResponseResults } from '~/types/base';
import { HikingTrailDto } from '~/types/hikingTrails';

export default function useHikingTrailsQuery(query: string, options?: {}) {
  return useQuery<ServerResponseResults<HikingTrailDto>, Error>(
    [QueryKeys.HIKING_TRAILS_QUERY_KEY],
    () =>
      fetch(
        `${process.env.NEXT_PUBLIC_URL}/server/api/hiking-trails${query}`
      ).then((res) => res.json()),
    options
  );
}
