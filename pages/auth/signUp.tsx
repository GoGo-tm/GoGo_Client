import { AuthBase, AuthForm, AuthInputOutline } from '~/components/auth/styled';
import styled from 'styled-components';
import Header from '~/components/header';
import Divider from '~/components/divider';
import AuthInput from '~/components/auth/Input';
import Button from '~/components/button';
import AuthRadio from '~/components/auth/Radio';
import type { ReactElement } from 'react';

const SignUp = () => {
  return (
    <AuthForm>
      <AuthBase>
        <AuthInputOutline>
          <AuthInput label="닉네임" placeholder="10자 이하의 닉네임 입력" />
          <AuthInput label="이메일 주소" placeholder="이메일 주소 입력" />
          <AuthInput
            label="비밀번호"
            type="password"
            placeholder="영문, 숫자 포함 8자리 이상의 비밀번호 입력"
          />
          <AuthInput
            label="비밀번호 확인"
            type="password"
            placeholder="영문, 숫자 포함 8자리 이상의 비밀번호 입력"
          />
        </AuthInputOutline>
      </AuthBase>
      <Space />
      <Divider />
      <AuthBase>
        <RadioOutline>
          가입 약관 동의
          <AuthRadio label="서비스 이용 약관" require />
          <AuthRadio label="개인정보 처리 방침" require />
          <AuthRadio label="위치정보 이용 동의" />
        </RadioOutline>
      </AuthBase>
      <Divider />
      <AuthBase>
        <Button>회원가입</Button>
      </AuthBase>
    </AuthForm>
  );
};

SignUp.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header title="회원가입" />
      {page}
    </>
  );
};

export default SignUp;

const RadioOutline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.688rem;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.r3};
`;

const Space = styled.div`
  padding-top: 4.5rem;
`;
