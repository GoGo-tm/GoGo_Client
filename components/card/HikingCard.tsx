import styled from 'styled-components';

import Heart from '~/assets/svgs/heartSolid.svg';
import theme from '~/constants/theme';
import type { Difficulty } from '~/types/base';
import { getLevel, getMeter } from '~/utils/misc';

import Card, { type CardProps } from './Card';

interface HikingCardProps extends CardProps {
  title: string;
  location: string;
  level: Difficulty;
  km: number;
  like: number;
}

const HikingCard = ({
  title,
  location,
  level,
  km,
  like,
  ...rest
}: HikingCardProps) => {
  return (
    <Card {...rest}>
      <Title>
        {title} <Heart /> {like}
      </Title>
      <Content>{location}</Content>
      <Content>
        {getLevel(level)} · {getMeter(km)}
      </Content>
    </Card>
  );
};

export default HikingCard;

const Title = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Content = styled.div`
  padding-top: 8px;
  font-size: ${theme.fontSize.r1};
  color: #898a8d;
  font-weight: normal;
`;
