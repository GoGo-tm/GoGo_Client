import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import router from 'next/router';
import type { InferGetServerSidePropsType } from 'next/types';
import type { ReactElement } from 'react';
import styled from 'styled-components';

import Banner from '~/components/banner';
import AsyncBoundary from '~/components/boundaries/asyncBoundary';
import Card from '~/components/card';
import Divider from '~/components/divider';
import Guide from '~/components/home/guide';
import Title, { Highlight } from '~/components/home/title';
import { BannerLoading } from '~/components/loading';
import Navbar from '~/components/navbar';
import Search from '~/components/search';
import QueryKeys from '~/constants/queries';
import useHikingTrailsQuery from '~/hooks/queries/useHikingTrailsQuery';
import type { NextPageWithLayout } from '~/types/base';
import * as misc from '~/utils/misc';

const Home: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  const { data: hikingsData } = useHikingTrailsQuery(
    misc.makeQueries({
      order: 'POPULARITY',
      size: 5,
    })
  );

  return (
    <Base>
      <AsyncBoundary
        rejectedFallback={<div>error..!</div>}
        pendingFallback={<BannerLoading />}
      >
        <Banner />
      </AsyncBoundary>
      <Outline>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
        <Title image="/images/13_Rocket.png" arrow>
          요즘
          <Highlight> HOT</Highlight>한 등산로
        </Title>
        <CardOutline>
          <CardWrapper>
            <AsyncBoundary
              rejectedFallback={<div>error..!</div>}
              pendingFallback={<div>loading..!</div>}
            >
              {hikingsData?.contents.map((content) => (
                <Card
                  key={content.id}
                  title={content.name}
                  location={content.address}
                  level={content.difficulty}
                  km={content.length}
                  like={content.favoriteCount}
                  imageUrl={content.imageUrl}
                  onClick={() =>
                    router.push({
                      pathname: `/hiking/${content.id}`,
                      query: {
                        imageUrl: content.imageUrl,
                        name: content.name,
                        address: content.address,
                        difficulty: content.difficulty,
                        length: content.length,
                      },
                    })
                  }
                />
              ))}
            </AsyncBoundary>
          </CardWrapper>
        </CardOutline>
      </Outline>
      <Divider />
      <Outline>
        <Title image="/images/09_Mountain2.png">
          등산이
          <Highlight> 처음</Highlight>이신가요?
        </Title>
        <Guide />
      </Outline>
      <Divider />
      {/* <Outline>
        <Title image="/images/14_Shoe.png" arrow>
          등산갈 때 뭐 챙기지?
        </Title>
      </Outline>
      <Divider />
      <Outline>
        <Title image="/images/13_Rocket.png" arrow>
          <Highlight>의지</Highlight>를 불태워줄 등산-log
        </Title>
      </Outline> */}
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
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QueryKeys.HIKING_TRAILS_QUERY_KEY], () =>
    fetch(
      `${
        process.env.NEXT_PUBLIC_URL
      }/server/api/hiking-trails${misc.makeQueries({
        order: 'POPULARITY',
        size: 5,
      })}`
    ).then((res) => res.json())
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Base = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Outline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem;
`;

const CardOutline = styled.div`
  display: grid;
  overflow: auto;
  width: 100%;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  & > div {
    width: 11.625rem;
  }
`;

const SearchWrapper = styled.div`
  cursor: pointer;
  margin-top: 1.5rem;
`;
