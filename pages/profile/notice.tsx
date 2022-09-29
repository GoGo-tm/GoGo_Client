import type { ReactElement } from 'react';
import styled from 'styled-components';

import Layout from '~/components/layout';
import NoticePost from '~/components/noticePost';

const Notice = () => {
  return (
    <Base>
      <NoticePost />
      <NoticePost />
    </Base>
  );
};

Notice.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="공지사항">{page}</Layout>;
};

export default Notice;

const Base = styled.div<{ full?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  height: ${({ full }) => full && '100%'};
  font-size: ${({ theme }) => theme.fontSize.m3};
`;
