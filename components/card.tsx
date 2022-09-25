import Image from 'next/image';
import styled from 'styled-components';

import theme from '~/constants/theme';

interface Props {
  title: string;
  location: string;
  level: string;
  km: number;
  like: number;
  img?: string | null;
}

const Card = ({ title, location, level, km, like, img }: Props) => {
  const src = img ? img : '/images/등산_기본이미지.png';

  return (
    <CardWrapper>
      <ImageWrapper>
        <HikingImage
          src={src}
          alt="등산로"
          width={186}
          height={118}
          objectFit="cover"
          layout="responsive"
          priority
        />
      </ImageWrapper>
      <ContentWrapper>
        <Title>
          {title}
          <span> · {like}</span>
        </Title>
        <Content>
          {location} · {level} · {km}km
        </Content>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: inline-block;
  padding-bottom: 1rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  border-radius: 0.625rem 0.625rem 0 0;
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
  font-size: ${theme.fontSize.sb3};
  font-weight: bold;
`;

const Content = styled.div`
  padding-top: 8px;
  font-size: ${theme.fontSize.r1};
  color: #898a8d;
`;
