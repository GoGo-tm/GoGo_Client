import { useCallback, useDeferredValue, useMemo, useState } from 'react';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import SearchIcon from '../assets/svgs/magnifier.svg';
import useMylogsSearchQuery from '~/hooks/queries/useMylogsSearchQuery';
import { useRouter } from 'next/router';

interface AutoCompleteProps {
  id: string;
  query: string;
  setHikingTrailId: Dispatch<SetStateAction<number | null>>;
}

const AutoComplete = ({ query, id, setHikingTrailId }: AutoCompleteProps) => {
  const deferredQuery = useDeferredValue(query);
  const { data } = useMylogsSearchQuery(deferredQuery, {
    enabled: Boolean(deferredQuery),
  });

  const options = useMemo(() => {
    if (data?.contents?.length >= 1) {
      setHikingTrailId(data.contents[0].id);
    }
    return data?.contents.map((hiking) => (
      <option key={hiking.id} value={hiking.name} />
    ));
  }, [data?.contents, setHikingTrailId, deferredQuery]);
  return <datalist id={id}>{options}</datalist>;
};

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [hikingTrailId, setHikingTrailId] = useState<number | null>(null);

  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const onKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (!hikingTrailId) return;
      if (e.key === 'Enter') {
        router.push(
          {
            pathname: `/hiking/${hikingTrailId}`,
          },
          undefined,
          { shallow: true }
        );
      }
    },
    [hikingTrailId, router]
  );
  return (
    <Base>
      <Label />
      <Input
        type="text"
        list="search"
        placeholder="등산로명을 검색해보세요"
        value={query}
        onChange={onChangeQuery}
        onKeyUp={onKeyUp}
      />
      <Icon />
      <AutoComplete
        id="search"
        query={query}
        setHikingTrailId={setHikingTrailId}
      />
    </Base>
  );
};

export default Search;

const Base = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 100%;
  height: 3.125rem;
  border-radius: 2.625rem;
  border: 0.7px solid ${({ theme }) => theme.colors.primary};
  padding: 0 3.188rem;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.r4};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_dense};
  }
`;

const Icon = styled(SearchIcon)<{ focus?: boolean }>`
  position: absolute;
  width: 1.156rem;
  left: 1.25rem;
  fill: ${({ theme }) => theme.colors.gray_dense};
`;
