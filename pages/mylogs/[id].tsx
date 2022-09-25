import dayjs from 'dayjs';
import { withAuthSsr } from 'hof/withAuthSsr';
import { InferGetServerSidePropsType } from 'next';
import { ReactElement } from 'react';
import styled from 'styled-components';

import Layout from '~/components/layout';
import Rate from '~/components/mylogs/rate';
import Typography from '~/components/typography';
import type { NextPageWithLayout } from '~/types/base';
import { HikingLogDetailDto } from '~/types/mylogs';
import { getLevel } from '~/utils/misc';
import * as mylogService from '~/utils/mylog';

const Mylog: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ hikingLog }) => {
  const { hikingDate, difficulty, starRating, memo } =
    hikingLog as HikingLogDetailDto;

  return (
    <MylogBase>
      <MylogTitle>
        <MylogTitleOutline>
          <Typography as="h2" size="m4" weight="semiBold">
            북한산
          </Typography>
          <Typography size="r1" weight="medium" color="gray_dense">
            {getLevel(difficulty)}
          </Typography>
        </MylogTitleOutline>
        <MylogTitleOutline>
          <Rate rate={starRating} />
          <Typography as="span" size="r1" weight="medium" color="gray_dense">
            {dayjs(hikingDate).format('YYYY.MM.DD')}
          </Typography>
        </MylogTitleOutline>
      </MylogTitle>
      <MylogContent>
        <Typography size="r4" weight="regular">
          {memo}
        </Typography>
      </MylogContent>
    </MylogBase>
  );
};

export default Mylog;

Mylog.getLayout = function (page: ReactElement) {
  return <Layout title="등산로그">{page}</Layout>;
};

export const getServerSideProps = withAuthSsr(async ({ req, params }) => {
  if (!params || !params.id || !req.session || !req.session.accessToken)
    return { notFound: true };

  const hikingLog: HikingLogDetailDto = await mylogService.getMylogById(
    params.id,
    req.session?.accessToken
  );

  if (!hikingLog) return { notFound: true };

  return {
    props: {
      hikingLog,
    },
  };
}, '/auth/redirect');

const MylogBase = styled.main`
  padding: 1.438rem 1rem;
`;

const MylogTitle = styled.div`
  padding: 0 1.188rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MylogTitleOutline = styled.div`
  fill: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 100%;
  gap: 0.65rem;
`;

const MylogContent = styled.div``;
