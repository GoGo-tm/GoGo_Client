import Layout from '~/components/layout';
import Protected from '~/components/protected';
import { useSession } from 'next-auth/react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '~/types/base';

const Profile: NextPageWithLayout<{}> = () => {
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    return <Protected content="로그인하고 나만의 등산로그를 기록해보세요!" />;
  }

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
