import { signOut } from 'next-auth/react';
import type { ReactElement } from 'react';

import Layout from '~/components/layout';
import type { NextPageWithLayout } from '~/types/base';

const Mylogs: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <h1>my logs</h1>
      <button onClick={() => signOut()}>로그아웃</button>
    </div>
  );
};

Mylogs.getLayout = function (page: ReactElement) {
  return <Layout title="등산로그">{page}</Layout>;
};

export default Mylogs;
