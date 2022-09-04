import styled from 'styled-components';

import theme from '~/constants/theme';

interface Props {
  title: string;
  location: string;
  level: string;
  km: number;
  like: number;
}

const Card = ({ title, location, level, km, like }: Props) => {
  return (
    <CardWrapper>
      <img src="/images/Rectangle33.png" width="100%" />
      <ContentWrapper>
        <Title>
          {title}
          <span> · {like}</span>
        </Title>
        <Content>
          {location} · {level} · {km}km
        </Content>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  box-shadow: 0px 4px 4px #ecedef;
  border-radius: 10px;
  padding: 1rem 0;
`;

const ContentWrapper = styled.div`
  padding: 10px 10px 0 10px;
`;

const Title = styled.div`
  font-size: ${theme.fontSize.sb3};
  font-weight: bold;
`;

const Content = styled.div`
  padding-top: 8px;
  font-size: ${theme.fontSize.r1};
  color: #898a8d;
`;
