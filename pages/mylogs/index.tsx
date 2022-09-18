import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import type { ReactElement } from 'react';
import styled from 'styled-components';

import Divider from '~/components/divider';
import Layout from '~/components/layout';
import Tab from '~/components/mylogs/tab';
import Protected from '~/components/protected';
import type { NextPageWithLayout } from '~/types/base';

const Mylogs: NextPageWithLayout<{}> = () => {
  const { data: session, status } = useSession();
  const { query } = useRouter();

  if (status === 'unauthenticated') {
    return <Protected content="로그인하고 나만의 등산로그를 기록해보세요!" />;
  }

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
      </>
    );
  }

  return (
    <>
      <h1>my logs</h1>
      <button onClick={() => signOut()}>로그아웃</button>
    </>
  );
};

Mylogs.getLayout = function (page: ReactElement) {
  return (
    <Layout title="등산로그">
      <MyLogsBase>
        <Tab />
        {page}
      </MyLogsBase>
    </Layout>
  );
};

export default Mylogs;

const MyLogsBase = styled.main`
  position: relative;
`;

const MylogsSpace = styled.div`
  width: 100%;
  height: 4.5rem;
`;
