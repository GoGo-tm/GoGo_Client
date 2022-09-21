import { dehydrate, QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { withAuthSsr } from 'hof/withAuthSsr';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import styled from 'styled-components';

import Divider from '~/components/divider';
import Layout from '~/components/layout';
import { NoWrap, Wrap } from '~/components/mylogs/items';
import Tab from '~/components/mylogs/tab';
import Toggle from '~/components/mylogs/toggle';
import QueryKeys from '~/constants/queries';
import useMylogs from '~/hooks/queries/useMylogs';
import type { NextPageWithLayout } from '~/types/base';

const Mylogs: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  const { query } = useRouter();
  const { data } = useMylogs(
    { accessToken: user?.accessToken },
    { enabled: !!user?.accessToken }
  );

  if (query?.tab === 'wrap') {
    return (
      <>
        <MylogsSpace />
        <Divider margin="0" dense="8" color="#F3F4F4" />
        {data?.contents.map((v) => (
          <Wrap key={v.id} {...v} />
        ))}
      </>
    );
  }

  if (query?.tab === 'nowrap') {
    return (
      <>
        <MylogsSpace />
        <Divider margin="0" dense="8" color="#F3F4F4" />
        {data?.contents.map((v) => (
          <NoWrap key={v.id} {...v} />
        ))}
      </>
    );
  }

  return (
    <>
      <h1>my logs</h1>
    </>
  );
};

Mylogs.getLayout = function (page: ReactElement) {
  return (
    <Layout title="등산로그">
      <MyLogsBase>
        <Tab />
        {page}
        <Toggle />
      </MyLogsBase>
    </Layout>
  );
};

export default Mylogs;

export const getServerSideProps = withAuthSsr(async ({ req }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([QueryKeys.MYLOGS_KEY], () =>
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/server/api/hiking-log`, {
        headers: {
          Authorization: `Bearer ${req?.session?.accessToken}`,
        },
      })
      .then((res) => res.data)
  );
  return {
    props: {
      user: req.session,
      dehydratedState: dehydrate(queryClient),
    },
  };
}, '/auth/redirect');

const MyLogsBase = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MylogsSpace = styled.div`
  width: 100%;
  height: 4.5rem;
`;
