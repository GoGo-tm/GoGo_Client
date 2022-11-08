import Image from 'next/image';
import type { ReactElement } from 'react';
import styled from 'styled-components';

import Layout from '~/components/layout';

import notFoundSrc from '../public/images/404.png';

const NotFound = () => {
  return (
    <Base>
      <Image src={notFoundSrc} priority alt="404" placeholder="blur" />
    </Base>
  );
};

export default NotFound;

NotFound.getLayout = function (page: ReactElement) {
  return <Layout title="404 Not Found">{page}</Layout>;
};

const Base = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
