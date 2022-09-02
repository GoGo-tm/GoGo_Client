import Layout from '~/components/layout';
import Protected from '~/components/protected';
import { useSession } from 'next-auth/react';
import Divider from '~/components/divider';
import styled from 'styled-components';
import ProfileNavlink from '~/components/profile/profileNavlink';
import MyImage from '~/components/profile/myImage';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '~/types/base';
import { MyImageLoading } from '~/components/loading';

const Profile: NextPageWithLayout<{}> = () => {
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    return <Protected content="로그인하고 나만의 등산로그를 기록해보세요!" />;
  }

  return (
    <Base>
      <MyImage>{session?.user?.email}</MyImage>
      <Divider margin="0" dense="8" color="#F3F4F4" />
      <ProfileNavlink />
    </Base>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="내 정보">{page}</Layout>;
};

export default Profile;

const Base = styled.main``;
