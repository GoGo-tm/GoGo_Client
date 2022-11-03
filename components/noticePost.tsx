import styled from 'styled-components';

const NoticePost = () => {
  return (
    <Wrapper>
      <NoticeTitle>[이용방법] 등산로그 예약 기능</NoticeTitle>
      <NoticeDate>22.05.01</NoticeDate>
    </Wrapper>
  );
};

export default NoticePost;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.3px solid #b7b7b7;
  padding: 21px 0;
  cursor: pointer;
`;

const NoticeTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m4};
  font-weight: bold;
`;

const NoticeDate = styled.div`
  font-size: ${({ theme }) => theme.fontSize.r3};
  color: ${({ theme }) => theme.colors.gray_dense};
  font-weight: 400;
`;
