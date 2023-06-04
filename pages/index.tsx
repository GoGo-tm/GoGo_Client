import router from 'next/router';
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
import usePopularHikingTrailsQuery from '~/hooks/queries/usePopularHikingTrailsQuery';
import type { NextPageWithLayout } from '~/types/base';

const Home: NextPageWithLayout<{}> = () => {
  const { data } = usePopularHikingTrailsQuery();

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
              {data?.contents?.map((content) => (
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
        <Title image="/images/10_Mountain3.png">
          등산이
          <Highlight> 처음</Highlight>이신가요?
        </Title>
        <Guide />
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
