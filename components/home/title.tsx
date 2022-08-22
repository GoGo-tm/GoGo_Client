import Image from 'next/image';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../assets/svgs/right.svg';
import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  image: string;
  arrow?: boolean;
}

const Title = ({ image, arrow, children }: Props) => {
  return (
    <Base>
      <Content>{children}</Content>
      <Image src={image} alt={image} width={24} height={29} />
      {arrow && <ArrowIcon />}
    </Base>
  );
};

export default Title;

const Base = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  fill: ${({ theme }) => theme.colors.gray.medium};
  font-size: ${({ theme }) => theme.fontSize.sb4};
  font-weight: 600;
  svg {
    position: absolute;
    cursor: pointer;
    width: 0.5rem;
    right: 0;
  }
`;

const Content = styled.h1`
  padding-right: 0.313rem;
`;

export const Highlight = styled.b`
  color: ${({ theme }) => theme.colors.primary};
`;
