import { withAuthSsr } from 'hof/withAuthSsr';
import { InferGetServerSidePropsType } from 'next/types';
import type { ReactElement } from 'react';

import Divider from '~/components/divider';
import Layout from '~/components/layout';
import MyImage from '~/components/profile/myImage';
import ProfileNavlink from '~/components/profile/profileNavlink';
import type { NextPageWithLayout } from '~/types/base';

const Profile: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  return (
    <main>
      <MyImage email={user?.user.email} name={user?.user.name}></MyImage>
      <Divider margin="0" dense="8" color="#F3F4F4" />
      <ProfileNavlink />
    </main>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="내 정보">{page}</Layout>;
};

export default Profile;

export const getServerSideProps = withAuthSsr(({ req }) => {
  return {
    props: {
      user: req.session,
    },
  };
}, '/auth/redirect');
