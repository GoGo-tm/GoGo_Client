import dayjs from 'dayjs';
import Image from 'next/legacy/image';
import Link from 'next/link';
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
    <>
      {query?.tab === 'wrap' ? (
        <ItemOutline>
          {mylogs?.map((mylog) => (
            <Wrap
              key={mylog.id}
              data={mylog}
              onPush={() => onPush(`/mylogs/${mylog.id}`)}
            />
          ))}
        </ItemOutline>
      ) : (
        mylogs?.map((mylog) => (
          <NoWrap
            key={mylog.id}
            data={mylog}
            onPush={() => onPush(`/mylogs/${mylog.id}`)}
          />
        ))
      )}
      <Target ref={ref} />
    </>
  );
};

const Wrap = memo(function Wrap(props: ItemProps) {
  const { data } = props;
  const { imageUrls, id } = data;
  const representative = useMemo(() => {
    if (imageUrls.length) return imageUrls[0];
    return DefaultImage;
  }, [imageUrls]);
  const isMultiImages = imageUrls.length >= 2 ? true : false;
  return (
    <Link href={`/mylogs/${id}`}>
      <WrapBase>
        <Image
          src={representative}
          alt="등산로그"
          layout="responsive"
          width={116}
          height={116}
          priority
        />
        {isMultiImages && (
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.55556 1H1.61111C1.2736 1 1 1.2736 1 1.61111V9.55556C1 9.89306 1.2736 10.1667 1.61111 10.1667H9.55556C9.89306 10.1667 10.1667 9.89306 10.1667 9.55556V1.61111C10.1667 1.2736 9.89306 1 9.55556 1Z"
              stroke="#B2B3B6"
              strokeLinejoin="round"
            />
            <path
              d="M12 2.83337V11.0834C12 11.3265 11.9034 11.5596 11.7315 11.7316C11.5596 11.9035 11.3264 12 11.0833 12H2.83333M1 6.8056L3.33933 4.72599C3.45208 4.62578 3.5979 4.57081 3.74874 4.57165C3.89958 4.5725 4.04478 4.6291 4.15639 4.73057L7.11111 7.41671"
              stroke="#B2B3B6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.88889 6.19441L7.35097 4.97586C7.45668 4.88783 7.589 4.83804 7.72652 4.83455C7.86403 4.83105 7.99871 4.87406 8.10875 4.95661L10.1667 6.49997M1 4.97219V7.41664M10.1667 4.97219V7.41664"
              stroke="#B2B3B6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </WrapBase>
    </Link>
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
          priority
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

const WrapBase = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  img {
    border-radius: 0.625rem;
  }
  svg {
    position: absolute;
    z-index: 999;
    right: 8px;
    top: 10px;
  }
`;

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

const ItemOutline = styled.div`
  display: grid;
  width: 100%;
  row-gap: 5px;
  column-gap: 7px;
  padding: 1.313rem 1.063rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Target = styled.div`
  width: 100%;
  height: 5.625rem;
`;
