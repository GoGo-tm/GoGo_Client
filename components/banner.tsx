import Image from 'next/image';
import styled from 'styled-components';
import useWeather from '~/hooks/queries/useWeather';
import { ReactComponent as LocationIcon } from '../svgs/location.svg';

interface Props {
  content: string;
  landingImg: string;
  weatherImg: string;
  city: string;
}

const Banner = () => {
  const { data: weatherData } = useWeather({
    staleTime: 5000,
    cacheTime: Infinity,
  }) as { data: Props };

  return (
    <Base>
      <Wrapper>
        <Logo src="/images/01_Logotype.png" width={90} height={25} />
        <WeatherContent>{weatherData.content}</WeatherContent>
        <LocationContent>
          <Icon />
          {weatherData.city}
        </LocationContent>
      </Wrapper>
      <WeatherImagePositionBox absolute>
        <WeatherImage
          width={150}
          height={115}
          src={weatherData.weatherImg}
          alt={weatherData.weatherImg}
        />
      </WeatherImagePositionBox>
      <PositionBox>
        <Image
          layout="responsive"
          width={1000}
          height={200}
          src={weatherData.landingImg}
          alt={weatherData.landingImg}
        />
      </PositionBox>
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

const PositionBox = styled.div<{ absolute?: boolean }>`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
`;

const WeatherImagePositionBox = styled(PositionBox)`
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
  display: flex;
  gap: 0.563rem;
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.r2};
  color: ${({ theme }) => theme.colors.primary};
  fill: ${({ theme: { colors } }) => colors.primary};
`;

const Icon = styled(LocationIcon)`
  width: 0.75rem;
`;

const Logo = styled(Image)`
  width: 100%;
`;
