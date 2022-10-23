import styled from 'styled-components';

import theme from '~/constants/theme';

import Pre from '../assets/svgs/pre.svg';

interface Props {
  title: string;
  pre?: boolean;
}

const Header = ({ title, pre }: Props) => {
  return (
    <header>
      {pre ?? <FixedPre />}
      <Title>{title}</Title>
    </header>
  );
};

export default Header;

const Title = styled.h1`
  font-size: ${theme.fontSize.sb5};
  font-weight: 700;
  text-align: center;
  padding: 1rem 0;
  border-bottom: 0.3px solid #b7b7b7;
`;

const FixedPre = styled(Pre)`
  position: fixed;
  top: 1rem;
  left: 1rem;
`;
