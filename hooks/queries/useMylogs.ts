import type { QueryFunctionContext } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';

import QueryKeys from '~/constants/queries';
import type { ServerResponseResults } from '~/types/base';
import type { HikingLogDto } from '~/types/mylogs';
import { getMylogsByQuery } from '~/utils/mylog';

interface UseMylogs {
  lastId?: number;
  size?: number;
  accessToken?: string;
}

export default function useMylogs(query: UseMylogs) {
  const { accessToken, size = 5 } = query;

  if (!accessToken) throw new Error('로그인이 필요한 서비스입니다.');

  const fetchMylogs = async ({
    pageParam,
  }: QueryFunctionContext): Promise<ServerResponseResults<HikingLogDto>> => {
    console.log(size);

    const mylogs = await getMylogsByQuery({
      lastId: pageParam,
      size,
      accessToken,
    });

    return mylogs;
  };

  return useInfiniteQuery<ServerResponseResults<HikingLogDto>, Error>(
    [QueryKeys.MYLOGS_KEY],
    fetchMylogs,
    {
      getNextPageParam: (d) =>
        d.hasNext ? d.contents[d.contents.length - 1].id : undefined,
    }
  );
}
