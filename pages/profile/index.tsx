import { withAuthSsr } from 'hof/withAuthSsr';
import Link from 'next/link';
import { InferGetServerSidePropsType } from 'next/types';
import type { ReactElement } from 'react';
import styled from 'styled-components';

import Divider from '~/components/divider';
import Layout from '~/components/layout';
import type { NextPageWithLayout } from '~/types/base';

const Profile: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  return (
    <main>
      <Base>
        안녕하세요!
        <br />
        {user?.nickname as string}
        <Email>{user?.user.email}</Email>
      </Base>
      <Divider margin="0" dense="8" color="#F3F4F4" />
      <nav>
        <Link href="/profile/update">
          <LinkOutline>
            <svg
              width="20"
              height="20"
              viewBox="0 0 71 70"
              fill="#B2B3B6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1177 54.933L31.7961 54.8763L68.1993 18.8209C69.6279 17.3923 70.414 15.495 70.414 13.4768C70.414 11.4587 69.6279 9.5614 68.1993 8.13279L62.2052 2.13867C59.3479 -0.718557 54.3629 -0.70344 51.5284 2.12733L15.1177 38.1903V54.933V54.933ZM56.8611 7.48273L62.8666 13.4655L56.8309 19.4445L50.8367 13.4542L56.8611 7.48273ZM22.6765 41.3423L45.4662 18.768L51.4603 24.7621L28.6744 47.3289L22.6765 47.3478V41.3423Z"
                fill="#B2B3B6"
              />
              <path
                d="M7.55879 69.9993H60.4703C64.639 69.9993 68.0291 66.6092 68.0291 62.4405V29.6807L60.4703 37.2395V62.4405H19.4941C19.3959 62.4405 19.2938 62.4783 19.1955 62.4783C19.0708 62.4783 18.9461 62.4443 18.8176 62.4405H7.55879V9.529H33.4363L40.9951 1.97021H7.55879C3.39012 1.97021 0 5.36033 0 9.529V62.4405C0 66.6092 3.39012 69.9993 7.55879 69.9993Z"
                fill="#B2B3B6"
              />
            </svg>
            내 정보 수정
          </LinkOutline>
        </Link>
        <Divider margin="0" color="#F3F4F4" />
        <Link href="/profile/notice">
          <LinkOutline>
            <svg
              width="21"
              height="21"
              viewBox="0 0 70 70"
              fill="#B2B3B6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.5 24.5H31.5V17.5H38.5M38.5 52.5H31.5V31.5H38.5M35 0C30.4037 0 25.8525 0.905302 21.6061 2.66422C17.3597 4.42313 13.5013 7.00121 10.2513 10.2513C3.68749 16.815 0 25.7174 0 35C0 44.2826 3.68749 53.185 10.2513 59.7487C13.5013 62.9988 17.3597 65.5769 21.6061 67.3358C25.8525 69.0947 30.4037 70 35 70C44.2826 70 53.185 66.3125 59.7487 59.7487C66.3125 53.185 70 44.2826 70 35C70 30.4037 69.0947 25.8525 67.3358 21.6061C65.5769 17.3597 62.9988 13.5013 59.7487 10.2513C56.4987 7.00121 52.6403 4.42313 48.3939 2.66422C44.1475 0.905302 39.5963 0 35 0V0Z"
                fill="#B2B3B6"
              />
            </svg>
            공지사항
          </LinkOutline>
        </Link>
        <Divider margin="0" color="#F3F4F4" />
        <LinkOutline
          onClick={() => window.open('https://forms.gle/V7P7HrTXpcbLw8gE7')}
        >
          <svg
            width="22"
            height="20"
            viewBox="0 0 78 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4929 36.2326V16.9087H7.24645C5.32457 16.9087 3.48141 17.6722 2.12244 19.0311C0.763463 20.3901 0 22.2333 0 24.1551V67.6338C0.00359496 68.0824 0.132047 68.5212 0.370961 68.9009C0.609875 69.2806 0.94981 69.5862 1.35267 69.7836C1.74079 69.9601 2.16871 70.0307 2.59296 69.9883C3.01721 69.9459 3.42267 69.7919 3.76815 69.5421L16.2079 60.3874H48.672C49.5875 60.4145 50.4988 60.2533 51.3494 59.9138C52.2001 59.5744 52.972 59.0639 53.6174 58.414C54.2627 57.7641 54.7678 56.9887 55.1013 56.1356C55.4348 55.2826 55.5896 54.3702 55.5561 53.455V50.7255H28.9858C25.142 50.7255 21.4557 49.1985 18.7378 46.4806C16.0198 43.7626 14.4929 40.0763 14.4929 36.2326V36.2326Z"
              fill="#B2B3B6"
            />
            <path
              d="M70.0489 0H28.9857C27.0638 0 25.2207 0.763463 23.8617 2.12244C22.5027 3.48141 21.7393 5.32457 21.7393 7.24645V36.2322C21.7393 38.1541 22.5027 39.9973 23.8617 41.3563C25.2207 42.7152 27.0638 43.4787 28.9857 43.4787H61.7155L73.2615 52.4401C73.6048 52.6939 74.0091 52.8522 74.4334 52.8989C74.8577 52.9455 75.2868 52.8789 75.677 52.7058C76.0881 52.5101 76.4354 52.2021 76.679 51.8175C76.9226 51.4328 77.0525 50.9872 77.0538 50.5319V7.24645C77.0549 5.3657 76.3246 3.55822 75.0175 2.20598C73.7103 0.853743 71.9286 0.0626914 70.0489 0V0Z"
              fill="#B2B3B6"
            />
          </svg>
          문의하기
        </LinkOutline>
        <Divider margin="0" color="#F3F4F4" />
      </nav>
    </main>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="내 정보">{page}</Layout>;
};

export default Profile;

export const getServerSideProps = withAuthSsr(({ req }) => {
  return {
    props: {
      user: req.session,
    },
  };
}, '/auth/redirect');

const Base = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sb5};
  line-height: 2.125rem;
  padding: 2.625rem 0 2.625rem 2.125rem;
  font-weight: 600;
`;

const Email = styled.div`
  font-size: ${({ theme }) => theme.fontSize.r3};
  font-weight: 400;
`;

const LinkOutline = styled.button`
  display: flex;
  padding: 1.5rem 0 1.5rem 2.125rem;
  background-color: white;
  border: none;
  gap: 1.48rem;
  font-size: ${({ theme }) => theme.fontSize.r5};
  cursor: pointer;
`;
