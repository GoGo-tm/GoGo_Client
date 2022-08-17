import type { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../svgs/arrow.svg';

interface Props extends PropsWithChildren {
  icon?: ReactElement;
}

const Title = ({ icon, children }: Props) => {
  return (
    <Base>
      <Content>{children}</Content>
      {icon}
      <ArrowIcon />
    </Base>
  );
};

export default Title;

const Base = styled.div`
  position: relative;
`;

const Content = styled.h1``;

export const Highlight = styled.b`
  color: ${({ theme }) => theme.colors.primary};
`;
