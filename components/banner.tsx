import Image from 'next/image';
import styled from 'styled-components';
import { ReactComponent as LocationIcon } from '../svgs/location.svg';

interface Props {
  content: string;
  landingImg: string;
  weatherImg: string;
  city: string;
}

const Banner = ({ content, landingImg, weatherImg, city }: Props) => {
  return (
    <Base>
      <Wrapper>
        <Logo src="/images/01_Logotype.png" width={90} height={25} />
        <WeatherContent>{content}</WeatherContent>
        <LocationContent>{city}</LocationContent>
      </Wrapper>
      <PositionBox>
        <WeatherImage
          width={150}
          height={115}
          src={weatherImg}
          alt={weatherImg}
        />
      </PositionBox>
      <LadingImage
        // layout="fill"
        width={1000}
        height={200}
        src={landingImg}
        alt={landingImg}
      />
    </Base>
  );
};

export default Banner;

const Base = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.banner.primary};
`;

const WeatherImage = styled(Image)`
  width: 100%;
  position: absolute;
`;

const LadingImage = styled(Image)`
  /* width: 100%; */
  height: 5.313rem;
`;

const PositionBox = styled.div`
  position: absolute;
  right: 1.25rem;
  top: 2.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.875rem 1.875rem 0 1.875rem;
`;

const WeatherContent = styled.div`
  margin-top: 2.625rem;
  line-height: 2.125rem;
  white-space: pre-wrap;
  font-size: ${({ theme }) => theme.fontSize.r6};
`;

const LocationContent = styled.div`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.r2};
`;

const Logo = styled(Image)`
  width: 100%;
`;
