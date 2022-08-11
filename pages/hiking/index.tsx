import type { ReactElement } from 'react';
import Layout from '~/components/layout';
import type { NextPageWithLayout } from '~/types/base';

const Hiking: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <h1>Hiking</h1>
    </div>
  );
};

Hiking.getLayout = function (page: ReactElement) {
  return <Layout title="등산로">{page}</Layout>;
};

export default Hiking;
