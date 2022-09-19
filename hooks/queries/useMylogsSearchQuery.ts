import { useQuery } from '@tanstack/react-query';

import QueryKeys from '~/constants/queries';
import { ResponseHikingTrails } from '~/types/hikingTrails';

export default function useMylogsSearchQuery(
  query: string | undefined,
  options?: {}
) {
  return useQuery<ResponseHikingTrails, Error>(
    [QueryKeys.MYLOGS_SEARCH_QUERY_KEY, query],
    () =>
      fetch(
        `${process.env.NEXT_PUBLIC_URL}/server/api/hiking-trails?name=${query}`
      ).then((res) => res.json()),
    options
  );
}
