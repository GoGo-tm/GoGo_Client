import { signIn } from 'next-auth/react';
import { ReactElement, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import AuthLabel from '~/components/auth/authLabel';
import {
  AuthBase,
  AuthCheckBox,
  AuthForm,
  AuthFormItem,
  AuthInput,
  AuthInputOutline,
} from '~/components/auth/styled';
import Button from '~/components/button';
import Divider from '~/components/divider';
import Header from '~/components/header';
import useForm from '~/hooks/useForm';
import * as userService from '~/utils/user';
import * as validator from '~/utils/validator';

import { ReactComponent as Icon } from '../../assets/svgs/right.svg';

interface FormData {
  nickname: string;
  email: string;
  password: string;
  type: string;
  passwordConfirm: string;
  LOCATION: boolean;
  PRIVACY_POLICY: boolean;
  SERVICE: boolean;
}

const SignUp = () => {
  const { formData, isPending, success, error, handleSubmit } =
    useForm<FormData>({
      serviceCallback: userService.signUp,
    });

  const onLocationTerms = useCallback((path: string) => {
    window.open(path);
  }, []);

  useEffect(() => {
    if (success)
      signIn('credentials', {
        email: formData?.email,
        password: formData?.password,
      });
  }, [formData?.email, formData?.password, success]);
  return (
    <AuthForm
      name="signUp"
      onFinish={(values) => handleSubmit(values as FormData)}
      onFinishFailed={(v) => console.log(v)}
    >
      <AuthBase root>
        <AuthInputOutline>
          <AuthLabel label="닉네임">
            <AuthFormItem
              name="nickname"
              tooltip="고고에서 무슨 이름으로 불리 길 원하세요?"
              rules={[
                {
                  validator: validator.nickname,
                  whitespace: false,
                },
              ]}
            >
              <AuthInput
                type="text"
                name="nickname"
                placeholder="2자 이상, 10자 이하의 닉네임 입력"
              />
            </AuthFormItem>
          </AuthLabel>
          <AuthLabel label="이메일 주소">
            <AuthFormItem
              name="email"
              rules={[
                {
                  validator: validator.email,
                },
              ]}
            >
              <AuthInput
                type="email"
                name="email"
                placeholder="이메일 주소 입력"
              />
            </AuthFormItem>
          </AuthLabel>
          <AuthLabel label="비밀번호">
            <AuthFormItem
              name="password"
              rules={[
                {
                  validator: validator.password,
                },
              ]}
              hasFeedback
            >
              <AuthInput
                type="password"
                name="password"
                placeholder="영문, 숫자 포함 8자리 이상의 비밀번호 입력"
              />
            </AuthFormItem>
          </AuthLabel>
          <AuthLabel label="비밀번호 확인">
            <AuthFormItem
              name="passwordConfirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '비밀번호를 입력해주세요.',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('비밀번호를 정확하게 입력해주세요.')
                    );
                  },
                }),
              ]}
            >
              <AuthInput
                type="password"
                name="passwordConfirm"
                placeholder="영문, 숫자 포함 8자리 이상의 비밀번호 입력"
              />
            </AuthFormItem>
          </AuthLabel>
        </AuthInputOutline>
      </AuthBase>
      <Space />
      <Divider />
      <AuthBase>
        <RadioOutline>
          가입 약관 동의
          <AuthFormItem
            name="SERVICE"
            valuePropName="checked"
            $full
            rules={[
              {
                validator: validator.service,
              },
            ]}
          >
            <AuthCheckBox name="SERVICE">서비스 이용 약관 (필수)</AuthCheckBox>
            <Icon onClick={() => onLocationTerms('/auth/terms/service')} />
          </AuthFormItem>
          <AuthFormItem
            name="PRIVACY_POLICY"
            valuePropName="checked"
            rules={[
              {
                validator: validator.privacy,
              },
            ]}
          >
            <AuthCheckBox name="PRIVACY_POLICY">
              개인정보 처리 방침 (필수)
            </AuthCheckBox>
            <Icon onClick={() => onLocationTerms('/auth/terms/privacy')} />
          </AuthFormItem>
          <AuthFormItem name="LOCATION" valuePropName="checked">
            <AuthCheckBox name="LOCATION">
              위치정보 이용 동의 (선택)
            </AuthCheckBox>
            <Icon onClick={() => onLocationTerms('/auth/terms/location')} />
          </AuthFormItem>
        </RadioOutline>
      </AuthBase>
      <Divider />
      <AuthBase>
        <AuthFormItem $full>
          <Button type="submit">{isPending ? '진행중...' : '회원가입'}</Button>
        </AuthFormItem>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.688rem;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.r3};
`;

const Space = styled.div`
  padding-top: 4.5rem;
`;
