import styled from 'styled-components';
import theme from '~/constants/theme';

interface Props {
  title: string;
  location: string;
  level: string;
  km: number;
  like: number;
}

const Card = () => {
  return (
    <CardWrapper>
      <img src="/images/Rectangle33.png" width="100%" />
      <ContentWrapper>
        <Title>관악산 A 코스</Title>
        <Content>서울특별시 관악구 쉬움</Content>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  width: 175px;
  height: 175px;
  box-shadow: 0px 4px 4px #ecedef;
  border-radius: 10px;
`;

const ContentWrapper = styled.div`
  padding: 10px;
`;

const Title = styled.div`
  font-size: ${theme.fontSize.sb3};
  font-weight: bold;
`;

const Content = styled.div`
  padding-top: 5px;
  font-size: ${theme.fontSize.r1};
`;
