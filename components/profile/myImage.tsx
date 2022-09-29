import styled from 'styled-components';

interface Props {
  email: string | null | undefined;
  name: string | null | undefined;
}

const MyImage = ({ email, name }: Props) => {
  return (
    <Base>
      <div>
        안녕하세요!
        <br />
        {name}
      </div>
      <Email>{email}</Email>
    </Base>
  );
};

export default MyImage;

const Base = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sb5};
  line-height: 2.125rem;
  padding-left: 34px;
  margin: 2.625rem 0;
  font-weight: 600;
`;

const Email = styled.div`
  font-size: ${({ theme }) => theme.fontSize.r3};
  font-weight: 400;
`;
