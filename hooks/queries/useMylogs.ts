import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import QueryKeys from '~/constants/queries';
import type { HikingLogResponseResults } from '~/types/mylogs';

interface UseMylogs {
  lastId?: number;
  size?: number;
  accessToken?: string;
}

export default function useMylogs(query: UseMylogs, options?: {}) {
  const { accessToken } = query;
  return useQuery<HikingLogResponseResults, Error>(
    [QueryKeys.MYLOGS_KEY],
    () =>
      axios
        .get(`/server/api/hiking-log`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data),
    options
  );
}
