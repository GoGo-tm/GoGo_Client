import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Button from './button';

interface Props {
  content: string;
}

const Protected = ({ content }: Props) => {
  return (
    <Base>
      <Outline>
        <Image
          src="/images/10_Mountain3.png"
          alt="Mountain.png"
          width={200}
          height={158}
        />
        <Paragraph>{content}</Paragraph>
      </Outline>
      <Link href="/auth/signIn">
        <Button>로그인/회원가입</Button>
      </Link>
    </Base>
  );
};

export default Protected;

const Base = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  margin-bottom: 2.688rem;
`;

const Outline = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.r4};
  font-weight: 400;
  padding-top: 1rem;
`;
