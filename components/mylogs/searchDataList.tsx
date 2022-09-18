import { Dispatch, SetStateAction, useEffect, useMemo } from 'react';

import useMylogsSearchQuery from '~/hooks/queries/useMylogsSearchQuery';

interface Props {
  query: string;
  setHikingTrailId: Dispatch<SetStateAction<number | null>>;
}

const SearchDataList = ({ query, setHikingTrailId }: Props) => {
  const { data } = useMylogsSearchQuery(query);

  const options = useMemo(() => {
    if (data && data.contents && data.contents.length >= 1) {
      setHikingTrailId(data.contents[0].id);
    }
    return data?.contents.map((hiking) => (
      <option key={hiking.id} value={hiking.name} />
    ));
  }, [data]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <datalist id="hikings">{options}</datalist>;
};

export default SearchDataList;
