import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import styled from 'styled-components';

const Guide = () => {
  const navigate = useRouter();
  const onLocationHikingGuide = useCallback(() => {
    navigate.push('/hiking-guide');
  }, [navigate]);
  return (
    <GuidWrapper>
      <Image
        onClick={onLocationHikingGuide}
        src="/images/15_등산가이드.png"
        alt="등산가이드"
        layout="responsive"
        width={1000}
        height={320}
      />
    </GuidWrapper>
  );
};

export default Guide;

const GuidWrapper = styled.section`
  position: relative;
  img {
    cursor: pointer;
  }
`;
