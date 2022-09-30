import dayjs from 'dayjs';
import Image from 'next/image';
import type { ParsedUrlQuery } from 'querystring';
import React, { memo, useMemo } from 'react';
import styled from 'styled-components';

import useMylogs from '~/hooks/queries/useMylogs';
import useIntersect from '~/hooks/useIntersect';
import type { HikingLogDto } from '~/types/mylogs';
import * as misc from '~/utils/misc';

import DefaultImage from '../../public/images/등산_기본이미지.png';
import Typography from '../typography';
import Rate from './rate';

interface Props {
  accessToken?: string;
  query?: ParsedUrlQuery;
  onPush: (path: string) => void;
}

interface ItemProps {
  onPush: (path: string) => void;
  data: HikingLogDto;
}

export const MylogItems = ({ accessToken, query, onPush }: Props) => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useMylogs({
    size: 5,
    accessToken,
  });
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const mylogs = useMemo(
    () => data && data.pages && data.pages.flatMap(({ contents }) => contents),
    [data]
  );

  return (
    <React.Fragment>
      {query?.tab === 'wrap' &&
        mylogs?.map((mylog) => (
          <Wrap
            key={mylog.id}
            data={mylog}
            onPush={() => onPush(`/mylogs/${mylog.id}`)}
          />
        ))}
      {query?.tab === 'nowrap' &&
        mylogs?.map((mylog) => (
          <NoWrap
            key={mylog.id}
            data={mylog}
            onPush={() => onPush(`/mylogs/${mylog.id}`)}
          />
        ))}
      <Target ref={ref} />
    </React.Fragment>
  );
};

const Wrap = memo(function Wrap(props: ItemProps) {
  return (
    <WrapBase>
      <h1>wrap</h1>
    </WrapBase>
  );
});

const NoWrap = memo(function NoWrap({ data, onPush }: ItemProps) {
  return (
    <NoWrapBase onClick={() => onPush(`/mylogs/${data.id}`)}>
      <NoWrapImageOutline>
        <Image
          src={
            data.hikingTrailImageUrl ? data.hikingTrailImageUrl : DefaultImage
          }
          alt="thumbnail"
          width={120}
          height={94}
        />
      </NoWrapImageOutline>
      <NoWrapContentsOutline>
        <NoWrapTitle>
          <Typography as="h2" size="m4" weight="semiBold" lineHeight="1.563rem">
            {data.hikingTrailName}
          </Typography>
          <Typography as="span" size="r1" weight="regular" color="gray_dense">
            {dayjs(data.hikingDate).format('YYYY.MM.DD')}
          </Typography>
        </NoWrapTitle>
        <NoWrapInfo>
          <Typography as="p" size="r1" weight="regular" color="gray_dense">
            {`${data.address} *${misc.getLevel(data.difficulty)} *${
              data.length
            }km`}
          </Typography>
        </NoWrapInfo>
        <Rate rate={data.starRating} />
      </NoWrapContentsOutline>
    </NoWrapBase>
  );
});

const WrapBase = styled.div``;

const NoWrapBase = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1.063rem;
  padding-top: 1rem;
  padding-bottom: 0.688rem;
  border-bottom: 0.019rem solid #b7b7b7;
  cursor: pointer;
`;

const NoWrapImageOutline = styled.div`
  img {
    border-radius: 0.625rem;
  }
`;

const NoWrapContentsOutline = styled.div`
  padding-left: 0.938rem;
  flex: 1;
  fill: ${({ theme }) => theme.colors.primary};
`;

const NoWrapTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 0.313rem;
`;

const NoWrapInfo = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.85rem;
`;

const Target = styled.div`
  width: 100%;
  height: 5.625rem;
`;
