import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Button from '~/components/button';
import Typography from '~/components/typography';

const Protected = () => {
  return (
    <Base>
      <Outline>
        <Image
          src="/images/10_Mountain3.png"
          alt="Mountain.png"
          width={200}
          height={158}
        />
        <Typography size="r4" weight="regular">
          로그인하고 나만의 등산로그를 기록해보세요!
        </Typography>
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
  p {
    padding-top: 1rem;
  }
`;
