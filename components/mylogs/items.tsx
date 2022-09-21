import dayjs from 'dayjs';
import Image from 'next/image';
import { memo } from 'react';
import styled from 'styled-components';

import type { HikingLogDto } from '~/types/mylogs';
import * as misc from '~/utils/misc';

import Typography from '../typography';
import Rate from './rate';

export const Wrap = memo(function Wrap(props: HikingLogDto) {
  return (
    <WrapBase>
      <h1>wrap</h1>
    </WrapBase>
  );
});

export const NoWrap = memo(function NoWrap(props: HikingLogDto) {
  return (
    <NoWrapBase>
      <NoWrapImageOutline>
        <Image
          src={props.hikingTrailImageUrl}
          alt="thumbnail"
          width={120}
          height={94}
        />
      </NoWrapImageOutline>
      <NoWrapContentsOutline>
        <NoWrapTitle>
          <Typography as="h2" size="m4" weight="semiBold" lineHeight="1.563rem">
            {props.hikingTrailName}
          </Typography>
          <Typography as="span" size="r1" weight="regular">
            {dayjs(props.hikingDate).format('YYYY.MM.DD')}
          </Typography>
        </NoWrapTitle>
        <NoWrapInfo>
          <Typography as="p" size="r1" weight="regular">
            {`${props.address} *${misc.getLevel(props.difficulty)} *${
              props.length
            }`}
          </Typography>
        </NoWrapInfo>
        <Rate rate={props.starRating} />
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
