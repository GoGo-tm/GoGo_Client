import styled from 'styled-components';

import theme from '~/constants/theme';

interface Props {
  title: string;
  location: string;
  level: string;
  km: number;
  star: number;
  date: string;
}

const Card = ({ title, location, level, km, star, date }: Props) => {
  return (
    <div>
      <img src="/images/Rectangle33.png" alt="Rectangle33" width="100%" />
      <Header>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Header>
      <Content>
        {location} · {level} · {km}km
      </Content>
      {star}
    </div>
  );
};

export default Card;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: ${theme.fontSize.sb3};
  font-weight: bold;
`;

const Date = styled.div`
  padding-top: 8px;
  font-size: ${theme.fontSize.r1};
`;

const Content = styled.div`
  padding-top: 8px;
  font-size: ${theme.fontSize.r1};
  color: #898a8d;
`;
