import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import QueryKeys from '~/constants/queries';
import { ServerResponseResults } from '~/types/base';
import { HikingTrailDto } from '~/types/hikingTrails';
import * as misc from '~/utils/misc';

export default function usePopularHikingTrailsQuery() {
  return useQuery([QueryKeys.HIKING_TRAILS_QUERY_KEY], async () => {
    const { data } = await axios.get<ServerResponseResults<HikingTrailDto>>(
      `/server/api/hiking-trails${misc.makeQueries({
        order: 'POPULARITY',
        size: 5,
      })}`
    );

    return data;
  });
}
