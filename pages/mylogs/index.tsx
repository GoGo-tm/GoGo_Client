import { dehydrate, QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { withAuthSsr } from 'hof/withAuthSsr';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, useCallback } from 'react';
import styled from 'styled-components';

import Layout from '~/components/layout';
import { MylogItems } from '~/components/mylogs/items';
import Tab from '~/components/mylogs/tab';
import Toggle from '~/components/mylogs/toggle';
import QueryKeys from '~/constants/queries';
import type { NextPageWithLayout } from '~/types/base';

const Mylogs: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  const router = useRouter();
  const { query } = router;

  const onPush = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router]
  );

  if (!user?.accessToken) router.push('/auth/redirect');

  switch (query.tab) {
    case 'wrap':
      return (
        <MylogItems
          query={query}
          onPush={onPush}
          accessToken={user?.accessToken}
        />
      );
    case 'nowrap':
      return (
        <MylogItems
          query={query}
          onPush={onPush}
          accessToken={user?.accessToken}
        />
      );
    default:
      return (
        <div>
          <h1>hi</h1>
        </div>
      );
  }
};

Mylogs.getLayout = function (page: ReactElement) {
  return (
    <>
      <Layout title="등산로그">
        <MyLogsBase>
          <Tab />
          {page}
          <Toggle />
        </MyLogsBase>
      </Layout>
    </>
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
  position: relative;
  width: 100%;
`;
