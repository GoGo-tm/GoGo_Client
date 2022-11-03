import { Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { withAuthSsr } from 'hof/withAuthSsr';
import { InferGetServerSidePropsType } from 'next/types';
import { signOut } from 'next-auth/react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import Divider from '~/components/divider';
import Layout from '~/components/layout';
import { NextPageWithLayout } from '~/types/base';

import Icon from '../../assets/svgs/right.svg';
import * as misc from '../../utils/misc';

interface FormData {
  nickname: string;
  email: string;
  password: string;
  newPassword: string;
  locationChecked: boolean;
}

const Update: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  const [focus, setFocus] = useState(false);
  const handleOnFocus = useCallback(() => setFocus(true), []);
  const handleOnBlur = useCallback(() => setFocus(false), []);
  const isFocus = useMemo(() => (focus ? true : false), [focus]);
  const onLocationTerms = useCallback((path: string) => {
    window.open(path);
  }, []);
  const onLogout = useCallback(() => {
    signOut();
  }, []);

  const onSubmit = async (values: FormData) => {
    try {
      const response = await axios
        .put(
          '/server/api/members',
          {
            nickname: values?.nickname,
            email: values?.email,
            password: values?.password,
            newPassword: values?.newPassword,
            agreed: values?.locationChecked,
          },
          {
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
              ContentType: 'application/json',
            },
          }
        )
        .then(() => alert('내 정보를 성공적으로 수정했어요'));

      return response;
    } catch (error) {
      throw new Error(misc.getErrorMessage(error));
    }
  };

  return (
    <Base full>
      <Form name="update" onFinish={onSubmit}>
        <UpdateInputOutline>
          <Form.Item
            style={{ margin: '0' }}
            name="nickname"
            rules={[{ required: true, message: '닉네임을 입력해 주세요.' }]}
          >
            <UpdateTextInput
              type="text"
              value={user?.user.name as string}
              placeholder="닉네임"
            />
          </Form.Item>
          <Form.Item
            style={{ margin: '0' }}
            name="email"
            rules={[{ required: true, message: '이메일을 입력해 주세요.' }]}
          >
            <UpdateTextInput
              type="email"
              placeholder="이메일"
              value={user?.user.email as string}
            />
          </Form.Item>
          <UpdatePasswordOutline
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            focus={isFocus}
          >
            <Form.Item
              style={{ margin: '0' }}
              name="password"
              rules={[{ required: true, message: '비밀번호를 입력해 주세요.' }]}
            >
              <Input.Password
                style={{ border: 'none' }}
                placeholder="현재 비밀번호"
                autoComplete="off"
              />
            </Form.Item>
            <Divider margin="0.813" color="#d9d9d9" />
            <Form.Item
              style={{ margin: '0' }}
              name="newPassword"
              rules={[{ required: true, message: '비밀번호를 입력해 주세요.' }]}
            >
              <Input.Password
                style={{ border: 'none' }}
                autoComplete="off"
                placeholder="신규 비밀번호"
              />
            </Form.Item>
          </UpdatePasswordOutline>
        </UpdateInputOutline>
        <Form.Item
          style={{ paddingTop: '1rem', paddingLeft: '0.5rem' }}
          name="locationChecked"
          valuePropName="checked"
        >
          <Checkbox>
            위치정보 이용 동의 (선택) {'  '}
            <Icon onClick={() => onLocationTerms('/auth/terms/location')} />
          </Checkbox>
        </Form.Item>
        <UpdateButton type="submit">변경</UpdateButton>
      </Form>
      <UpdateUserButtonOutline>
        <UpdateUserButton onClick={onLogout}>로그아웃</UpdateUserButton>
        <UpdateUserButton>탈퇴하기</UpdateUserButton>
      </UpdateUserButtonOutline>
    </Base>
  );
};

Update.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="내 정보 수정" pre={true}>
      {page}
    </Layout>
  );
};

export default Update;

export const getServerSideProps = withAuthSsr(({ req }) => {
  return {
    props: {
      user: req.session,
    },
  };
}, '/auth/redirect');

const Base = styled.div<{ full?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  height: ${({ full }) => full && '100%'};
  font-size: ${({ theme }) => theme.fontSize.m3};
`;

const UpdateInputOutline = styled.div`
  padding-top: 1.688rem;
  display: flex;
  flex-direction: column;
  gap: 0.688rem;
`;

const UpdatePasswordOutline = styled.div<{ focus: boolean }>`
  border: ${({ focus, theme }) =>
    focus ? `0.7px solid ${theme.colors.primary}` : '0.7px solid #d9d9d9'};
  border-radius: 0.625rem;
  padding: 0.938rem 1.125rem;
`;

const UpdateTextInput = styled(Input)`
  border-radius: 0.625rem;
  line-height: 1.563rem;
  padding: 0.938rem 2.125rem;
`;

const UpdateUserButtonOutline = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 0.813rem;
  text-decoration: underline;
  line-height: 1.563rem;
  font-size: ${({ theme }) => theme.fontSize.r3};
  color: ${({ theme }) => theme.colors.gray_dense};
  padding-bottom: 1.25rem;
`;

const UpdateButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  line-height: 1.563rem;
  font-size: ${({ theme }) => theme.fontSize.r3};
  padding: 0.531rem 1.6rem;
  border-radius: 1.563rem;
  margin-top: 1.313rem;
  float: right;
  cursor: pointer;
`;

const UpdateUserButton = styled.button`
  color: #898a8c;
  border: none;
  background: none;
  cursor: pointer;
`;
