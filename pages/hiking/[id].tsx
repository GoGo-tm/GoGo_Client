import axios from 'axios';
import { withAuthSsr } from 'hof/withAuthSsr';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Heart from '~/assets/svgs/heartSolid.svg';
import Container from '~/components/container';
import Divider from '~/components/divider';
import { HikingTrailDto } from '~/types/hikingTrails';
import { getLevel, getMeter } from '~/utils/misc';

const HikingById: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  const [data, setData] = useState<HikingTrailDto>({
    id: 0,
    imageUrl: '',
    name: '...',
    address: 'string',
    favoriteCount: 0,
    difficulty: 'HARD',
    length: 0,
    uptime: 0,
    downtime: 0,
  });
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `/server/api/hiking-trails/${router.query.id}`,
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        }
      );
      setData(response.data);
    })();
  }, [router.query.id, user?.accessToken]);

  return (
    <Container renderImage={renderImage}>
      <Wrapper>
        <TitleWrapper>
          <Title>{data.name}</Title>
          <Heart />
        </TitleWrapper>
        <MountainDescription>
          <svg
            width="15"
            height="19"
            viewBox="0 0 15 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 9.375C6.46875 9.375 5.625 8.53125 5.625 7.5C5.625 6.46875 6.46875 5.625 7.5 5.625C8.53125 5.625 9.375 6.46875 9.375 7.5C9.375 8.53125 8.53125 9.375 7.5 9.375ZM7.5 0C3.5625 0 0 3.01875 0 7.6875C0 10.8 2.50313 14.4844 7.5 18.75C12.4969 14.4844 15 10.8 15 7.6875C15 3.01875 11.4375 0 7.5 0Z"
              fill="#B2B3B6"
            />
          </svg>
          {data.address}
        </MountainDescription>
        <MountainDescription>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2335 13.3984H12.7402V10.9042C12.7402 10.5996 12.4922 10.3516 12.1869 10.3516H9.6936V7.85744C9.6936 7.55134 9.44568 7.30263 9.14039 7.30263H6.64704V4.80921C6.64704 4.50311 6.39912 4.25511 6.09312 4.25511H3.60048V1.76169C3.60048 1.45559 3.35256 1.20759 3.04656 1.20759H0.553211C0.248627 1.20759 0 1.45559 0 1.76169V16.4459C0 16.752 0.247917 17 0.553921 17H15.2335C15.3804 17 15.5213 16.9416 15.6252 16.8377C15.7291 16.7338 15.7874 16.5929 15.7874 16.4459V13.9518C15.7874 13.6471 15.5395 13.3984 15.2335 13.3984ZM16.8783 11.2833C16.9562 11.2053 17 11.0996 17 10.9893C17 10.879 16.9562 10.7732 16.8783 10.6952L6.30279 0.116407C6.22434 0.0407977 6.11936 -0.000994618 6.01043 1.79805e-05C5.90149 0.00103058 5.79731 0.0447672 5.72028 0.121822C5.64325 0.198876 5.59953 0.303094 5.59851 0.41206C5.5975 0.521027 5.63928 0.626039 5.71487 0.704513L16.2903 11.2833C16.4533 11.4463 16.7153 11.4463 16.8783 11.2833Z"
              fill="#B2B3B6"
            />
          </svg>
          난이도 {getLevel(data.difficulty)}
        </MountainDescription>
        <MountainDescription>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.05 5.4987C3.249 5.4987 2.601 4.85074 2.601 4.04978C2.601 3.6655 2.75366 3.29696 3.0254 3.02524C3.29714 2.75351 3.6657 2.60086 4.05 2.60086C4.851 2.60086 5.499 3.24882 5.499 4.04978C5.499 4.43406 5.34634 4.8026 5.0746 5.07432C4.80286 5.34605 4.4343 5.4987 4.05 5.4987ZM4.05 0C1.8 0 0 1.7999 0 4.04978C0 7.08261 4.05 11.5734 4.05 11.5734C4.05 11.5734 8.1 7.08261 8.1 4.04978C8.1 1.7999 6.3 0 4.05 0ZM13.95 5.4987C13.5657 5.4987 13.1971 5.34605 12.9254 5.07432C12.6537 4.8026 12.501 4.43406 12.501 4.04978C12.501 3.8595 12.5385 3.67109 12.6113 3.4953C12.6841 3.31951 12.7909 3.15978 12.9254 3.02524C13.06 2.89069 13.2197 2.78397 13.3955 2.71115C13.5713 2.63834 13.7597 2.60086 13.95 2.60086C14.1403 2.60086 14.3287 2.63834 14.5045 2.71115C14.6803 2.78397 14.84 2.89069 14.9746 3.02524C15.1091 3.15978 15.2159 3.31951 15.2887 3.4953C15.3615 3.67109 15.399 3.8595 15.399 4.04978C15.399 4.43406 15.2463 4.8026 14.9746 5.07432C14.7029 5.34605 14.3343 5.4987 13.95 5.4987ZM13.95 0C11.7 0 9.9 1.7999 9.9 4.04978C9.9 7.08261 13.95 11.5734 13.95 11.5734C13.95 11.5734 18 7.08261 18 4.04978C18 1.7999 16.2 0 13.95 0ZM13.95 12.5993C12.807 12.5993 11.79 13.3193 11.412 14.3992H6.588C6.34952 13.7257 5.85375 13.1741 5.20932 12.8654C4.56489 12.5567 3.82436 12.516 3.15 12.7523C2.81482 12.8697 2.50608 13.0521 2.24142 13.2889C1.97677 13.5257 1.76138 13.8124 1.60759 14.1325C1.45379 14.4526 1.3646 14.7999 1.34511 15.1545C1.32562 15.5091 1.37621 15.8641 1.494 16.1991C1.73571 16.8744 2.23483 17.4267 2.88235 17.7352C3.52988 18.0438 4.2732 18.0836 4.95 17.846C5.715 17.576 6.3 16.9641 6.588 16.1991H11.421C11.916 17.603 13.464 18.341 14.85 17.846C15.1862 17.7298 15.4961 17.5483 15.7619 17.3119C16.0278 17.0755 16.2442 16.789 16.399 16.4687C16.5537 16.1484 16.6436 15.8007 16.6635 15.4455C16.6834 15.0904 16.6329 14.7348 16.515 14.3992C16.128 13.3193 15.102 12.5993 13.95 12.5993ZM13.95 16.6491C13.592 16.6491 13.2486 16.5069 12.9954 16.2537C12.7422 16.0005 12.6 15.6572 12.6 15.2992C12.6 14.9411 12.7422 14.5978 12.9954 14.3446C13.2486 14.0915 13.592 13.9492 13.95 13.9492C14.308 13.9492 14.6514 14.0915 14.9046 14.3446C15.1578 14.5978 15.3 14.9411 15.3 15.2992C15.3 15.6572 15.1578 16.0005 14.9046 16.2537C14.6514 16.5069 14.308 16.6491 13.95 16.6491Z"
              fill="#B2B3B6"
            />
          </svg>
          구간거리 {getMeter(data.length)}
        </MountainDescription>
        <MountainDescription>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0C4.0374 0 0 4.0374 0 9C0 13.9626 4.0374 18 9 18C13.9626 18 18 13.9626 18 9C18 4.0374 13.9626 0 9 0ZM9 16.2C5.0301 16.2 1.8 12.9699 1.8 9C1.8 5.0301 5.0301 1.8 9 1.8C12.9699 1.8 16.2 5.0301 16.2 9C16.2 12.9699 12.9699 16.2 9 16.2Z"
              fill="#B2B3B6"
            />
            <path
              d="M9.9001 4.5H8.1001V9.9H13.5001V8.1H9.9001V4.5Z"
              fill="#B2B3B6"
            />
          </svg>
          평균소요시간 총 {data.uptime + data.downtime}분
          <span style={{ color: '#B2B3B6' }}>
            (상행 {data.uptime}분 + 하행 {data.downtime}분)
          </span>
        </MountainDescription>
      </Wrapper>
      <Divider margin="0.813" />
      <Wrapper>
        <Title>등산로 지도</Title>
      </Wrapper>
      <Image
        src="/images/가이드_썸네일.png"
        alt="thumbnail"
        layout="responsive"
        width={559}
        height={500}
      />
    </Container>
  );
};

export default HikingById;

const renderImage = () => {
  return (
    <HikingGuideImageOutline>
      <Image
        src="/images/가이드_썸네일.png"
        alt="thumbnail"
        objectFit="cover"
        layout="fill"
        width={559}
        height={265}
      />
    </HikingGuideImageOutline>
  );
};

const HikingGuideImageOutline = styled.section`
  width: 100%;
  height: 16.563rem;
  position: relative;
`;

const Wrapper = styled.div`
  padding: 2rem 2rem 1rem 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TitleWrapper = styled.h1`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const MountainDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 0.2rem;
`;

export const getServerSideProps = withAuthSsr(({ req }) => {
  return {
    props: {
      user: req.session,
    },
  };
}, '/auth/redirect');
