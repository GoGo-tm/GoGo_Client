import type { ReactElement } from 'react';
import Layout from '~/components/layout';
import type { NextPageWithLayout } from '~/types/base';

const Profile: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <h1>profile</h1>
    </div>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="내 정보">{page}</Layout>;
};

export default Profile;
