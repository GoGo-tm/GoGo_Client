import Header from '~/components/header';
import {
  AuthBase,
  AuthForm,
  AuthFormItem,
  AuthInput,
  AuthInputOutline,
} from '~/components/auth/styled';
import styled from 'styled-components';
import Image from 'next/image';
import Divider from '~/components/divider';
import Button, { Apple, Kakao, Naver } from '~/components/button';
import Link from 'next/link';
import AuthLabel from '~/components/auth/authLabel';
import validator from '~/utils/validator';
import type { ReactElement } from 'react';

const SignIn = () => {
  return (
    <>
      <AuthBase root>
        <ParagraphOutline>
          <Image
            src="/images/01_Logotype.png"
            alt="logo.png"
            width={90}
            height={25}
          />
          <Paragraph>{'로그인하고\n나만의 등산로그를 기록해보세요!'}</Paragraph>
        </ParagraphOutline>
      </AuthBase>
      <AuthForm onFinish={(v) => console.log(v)}>
        <AuthBase>
          <AuthInputOutline>
            <AuthLabel label="이메일">
              <AuthFormItem
                name="email"
                rules={[{ validator: validator.email }]}
              >
                <AuthInput
                  type="email"
                  placeholder="이메일을 입력해주세요."
                  name="email"
                />
              </AuthFormItem>
            </AuthLabel>
            <AuthLabel label="비밀번호">
              <AuthFormItem
                name="password"
                rules={[{ validator: validator.password }]}
                hasFeedback
              >
                <AuthInput
                  placeholder="비밀번호를 입력해주세요."
                  type="password"
                  name="password"
                />
              </AuthFormItem>
            </AuthLabel>
          </AuthInputOutline>
          <LinkOutline right>
            <Link href="/">비밀번호를 잊으셨나요?</Link>
          </LinkOutline>
          <AuthFormItem full>
            <Button type="submit">로그인</Button>
          </AuthFormItem>
          <LinkOutline>
            회원이 아니신가요?
            <Highlight>
              <Link href="/auth/signUp">가입하기</Link>
            </Highlight>
          </LinkOutline>
        </AuthBase>
      </AuthForm>
      <Divider />
      <AuthBase>
        <ButtonOutline>
          <Kakao />
          <Naver />
          <Apple />
        </ButtonOutline>
      </AuthBase>
    </>
  );
};

SignIn.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header title="로그인" />
      {page}
    </>
  );
};

export default SignIn;

const ParagraphOutline = styled.section``;

const LinkOutline = styled.div<{ right?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'center')};
  padding-bottom: ${({ right }) => right && '1rem'};
  font-size: ${({ theme }) => theme.fontSize.r2};
  padding-top: 0.7rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray.medium};
`;

const ButtonOutline = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m5};
  font-weight: 500;
  white-space: pre-wrap;
  padding: 1.75rem 0;
  line-height: 1.563rem;
`;

const Highlight = styled.b`
  font-weight: 600;
  padding-left: 0.25rem;
  color: ${({ theme }) => theme.colors.gray.dense};
`;
