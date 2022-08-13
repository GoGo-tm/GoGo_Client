import { GetServerSideProps } from 'next';
import AsyncBoundary from '~/components/asyncBoundary';
import Banner from '~/components/banner';
import Navbar from '~/components/navbar';
import type { InferGetServerSidePropsType } from 'next/types';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '~/types/base';
import { QueryClient } from '@tanstack/react-query';

const Home: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ weather }) => {
  return (
    <div>
      <AsyncBoundary
        rejectedFallback={<div>error..!</div>}
        pendingFallback={<div>loading...!</div>}
      >
        <Banner {...weather} />
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { latitude, longitude, city } = query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['weather']);

  const weather = await fetch(
    `http://localhost:3000/api/weather?latitude=${latitude}&longitude=${longitude}`
  ).then((res) => res.json());

  return {
    props: {
      weather: {
        ...weather,
        city,
      },
    },
  };
};
