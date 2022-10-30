import Image from 'next/image';
import styled from 'styled-components';

import Heart from '~/assets/svgs/heartSolid.svg';
import theme from '~/constants/theme';
import { Difficulty } from '~/types/base';
import { getLevel, getMeter } from '~/utils/misc';

interface Props {
  title: string;
  location: string;
  level: Difficulty;
  km: number;
  like: number;
  onClick?: () => void;
  imageUrl?: string | null;
}

const Card = ({
  title,
  location,
  level,
  km,
  like,
  imageUrl,
  onClick,
}: Props) => {
  const src = imageUrl ?? '/images/등산_기본이미지.png';

  return (
    <CardWrapper onClick={onClick}>
      <HikingImage
        src={src}
        alt="등산로"
        width={186}
        height={118}
        objectFit="cover"
        layout="responsive"
        priority
      />
      <ContentWrapper>
        <Title>
          {title}
          <div>
            <Heart /> {like}
          </div>
        </Title>
        <Content>{location}</Content>
        <Content>
          {getLevel(level)} · {getMeter(km)}
        </Content>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  width: 49%;
  display: inline-block;
  padding-bottom: 0.625rem;
`;

const HikingImage = styled(Image)`
  border-radius: 0.625rem 0.625rem 0 0;
`;

const ContentWrapper = styled.div`
  padding: 10px 10px 0 10px;
  padding-bottom: 1rem;
  box-shadow: 0px 4px 4px #ecedef;
  border-radius: 10px;
`;

const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: ${theme.fontSize.sb3};
  font-weight: bold;
`;

const Content = styled.div`
  padding-top: 8px;
  font-size: ${theme.fontSize.r1};
  color: #898a8d;
`;
