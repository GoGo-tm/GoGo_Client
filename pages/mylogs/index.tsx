import { dehydrate, QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { withAuthSsr } from 'hof/withAuthSsr';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import styled from 'styled-components';

import Divider from '~/components/divider';
import Layout from '~/components/layout';
import { NoWraps } from '~/components/mylogs/items';
import Tab from '~/components/mylogs/tab';
import Toggle from '~/components/mylogs/toggle';
import QueryKeys from '~/constants/queries';
import type { NextPageWithLayout } from '~/types/base';

const Mylogs: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  const router = useRouter();
  const { query } = router;

  if (!user?.accessToken) router.push('/auth/redirect');

  if (query?.tab === 'wrap') {
    return (
      <>
        <MylogsSpace />
        <Divider margin="0" dense="8" color="#F3F4F4" />
      </>
    );
  }

  if (query?.tab === 'nowrap') {
    return (
      <>
        <MylogsSpace />
        <Divider margin="0" dense="8" color="#F3F4F4" />
        <NoWraps accessToken={user?.accessToken} />
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
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: relative;
  width: 100%;
`;

const MylogsSpace = styled.div`
  width: 100%;
  height: 4.5rem;
`;
