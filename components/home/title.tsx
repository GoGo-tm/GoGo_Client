import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import ArrowIcon from '../../assets/svgs/right.svg';

interface Props extends PropsWithChildren {
  image: string;
  arrow?: boolean;
  base64?: string;
}

const Title = ({ image, base64, arrow, children }: Props) => {
  return (
    <Base>
      <Content>{children}</Content>
      <Image
        src={image}
        alt={image}
        width={28}
        height={28}
        placeholder={base64 ? 'blur' : undefined}
        blurDataURL={base64 ? base64 : undefined}
      />
      {arrow && <ArrowIcon />}
    </Base>
  );
};

export default Title;

const Base = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  fill: ${({ theme }) => theme.colors.gray_medium};
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
