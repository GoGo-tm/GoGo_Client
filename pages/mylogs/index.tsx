import { withAuthSsr } from 'hof/withAuthSsr';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import styled from 'styled-components';

import Divider from '~/components/divider';
import Layout from '~/components/layout';
import Tab from '~/components/mylogs/tab';
import Toggle from '~/components/mylogs/toggle';
import type { NextPageWithLayout } from '~/types/base';

const Mylogs: NextPageWithLayout<{}> = () => {
  const { query } = useRouter();

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

export const getServerSideProps = withAuthSsr(({ req }) => {
  return {
    props: {
      user: req.session,
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
