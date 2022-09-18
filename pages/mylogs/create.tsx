import { ReactElement } from 'react';

import Layout from '~/components/layout';

const Create = () => {
  return (
    <div>
      <h1>create</h1>
    </div>
  );
};

export default Create;

Create.getLayout = function (page: ReactElement) {
  return <Layout title="등산로그 기록하기">{page}</Layout>;
};
