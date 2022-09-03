import { GetServerSideProps } from 'next';
import AsyncBoundary from '~/components/boundaries/asyncBoundary';
import Banner from '~/components/banner';
import Navbar from '~/components/navbar';
import Search from '~/components/search';
import Divider from '~/components/divider';
import Title, { Highlight } from '~/components/home/title';
import { BannerLoading } from '~/components/loading';
import styled from 'styled-components';
import type { InferGetServerSidePropsType } from 'next/types';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '~/types/base';

const Home: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  return (
    <Base>
      <AsyncBoundary
        rejectedFallback={<div>error..!</div>}
        pendingFallback={<BannerLoading />}
      >
        <Banner />
      </AsyncBoundary>
      <Outline>
        <Search />
        <Title image="/images/13_Rocket.png" arrow>
          요즘
          <Highlight> HOT</Highlight>한 등산로
        </Title>
      </Outline>
      <Divider />
      <Outline>
        <Title image="/images/09_Mountain2.png">
          등산이
          <Highlight> 처음</Highlight>이신가요?
        </Title>
      </Outline>
      <Divider />
      <Outline>
        <Title image="/images/14_Shoe.png" arrow>
          등산갈 때 뭐 챙기지?
        </Title>
      </Outline>
      <Divider />
      <Outline>
        <Title image="/images/13_Rocket.png" arrow>
          <Highlight>의지</Highlight>를 불태워줄 등산-log
        </Title>
      </Outline>
    </Base>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
      <Navbar />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const Base = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
`;

const Outline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem;
`;
