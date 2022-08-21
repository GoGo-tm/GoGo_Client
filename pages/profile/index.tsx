import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Session, unstable_getServerSession } from 'next-auth';
import { settings } from 'pages/api/auth/[...nextauth]';
import Layout from '~/components/layout';
import Protected from '~/components/protected';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '~/types/base';

const Profile: NextPageWithLayout<{ session: Session }> = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!session) {
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      session: await unstable_getServerSession(req, res, settings),
    },
  };
};
