import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import AsyncBoundary from '~/components/asyncBoundary';
import Banner from '~/components/banner';
import Navbar from '~/components/navbar';
import QueryKeys from '~/constants/queries';
import type { InferGetServerSidePropsType } from 'next/types';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '~/types/base';

const Home: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  return (
    <div>
      <AsyncBoundary
        rejectedFallback={<div>error..!</div>}
        pendingFallback={<div>loading...!</div>}
      >
        <Banner />
      </AsyncBoundary>
    </div>
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

  await queryClient.prefetchQuery([QueryKeys.WEATHER_KEY], () =>
    fetch('http://localhost:3000/api/weather').then((res) => res.json())
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
