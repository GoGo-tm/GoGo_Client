import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import theme from '~/constants/theme';

export interface CardProps {
  imageUrl?: string;
  onClick?: () => void;
}

const Card = ({
  imageUrl,
  onClick,
  children,
}: PropsWithChildren<CardProps>) => {
  return (
    <CardWrapper onClick={onClick}>
      <HikingImage
        src={imageUrl ?? '/images/등산_기본이미지.png'}
        alt="등산로"
        width={186}
        height={118}
      />
      <ContentWrapper>{children}</ContentWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  width: 49%;
  display: inline-block;
  padding-bottom: 0.625rem;
`;

const HikingImage = styled.img`
  border-radius: 0.625rem 0.625rem 0 0;
`;

const ContentWrapper = styled.div`
  padding: 10px 10px 0 10px;
  padding-bottom: 1rem;
  box-shadow: 0px 4px 4px #ecedef;
  border-radius: 10px;
  font-size: ${theme.fontSize.sb3};
  font-weight: bold;
`;
