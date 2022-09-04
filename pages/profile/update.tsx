import type { ReactElement } from 'react';

import Layout from '~/components/layout';

const Update = () => {
  return (
    <div>
      <h1>내 정보 수정</h1>
    </div>
  );
};

Update.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="내 정보 수정">{page}</Layout>;
};

export default Update;
