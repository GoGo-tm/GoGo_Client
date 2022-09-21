import styled from 'styled-components';

import { ReactComponent as SearchIcon } from '../assets/svgs/magnifier.svg';

const Search = () => {
  return (
    <Base>
      <Label />
      <Input type="text" list="search" placeholder="등산로명을 검색해보세요" />
      <Icon />
      <AutoComplete id="search"></AutoComplete>
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

const AutoComplete = styled.datalist``;

const Icon = styled(SearchIcon)<{ focus?: boolean }>`
  position: absolute;
  width: 1.156rem;
  left: 1.25rem;
  fill: ${({ theme }) => theme.colors.gray_dense};
`;
