import { Checkbox, Form, Input } from 'antd';
import { signOut } from 'next-auth/react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import Divider from '~/components/divider';
import Layout from '~/components/layout';

import Icon from '../../assets/svgs/right.svg';

const Update = () => {
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

  return (
    <>
      <Base>
        <Form name="update">
          <UpdateInputOutline>
            <UpdateTextInput type="text" placeholder="닉네임" />
            <UpdateTextInput type="email" placeholder="이메일" />
            <UpdatePasswordOutline
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              focus={isFocus}
            >
              <Input.Password
                style={{ border: 'none' }}
                autoComplete="off"
                value={'qwe123qwe'}
              />
              <Divider margin="0.813" color="#d9d9d9" />
              <Input.Password
                style={{ border: 'none' }}
                autoComplete="off"
                placeholder="신규 비밀번호"
              />
            </UpdatePasswordOutline>
          </UpdateInputOutline>
          <UpdateButton type="submit">변경</UpdateButton>
        </Form>
      </Base>
      <Divider margin="1.313" />
      <Base full>
        <Form name="term">
          <Form.Item valuePropName="checked">
            <Checkbox>위치정보 이용 동의 (선택)</Checkbox>
            <Icon onClick={() => onLocationTerms('/auth/terms/location')} />
          </Form.Item>
        </Form>
        <UpdateUserButtonOutline>
          <UpdateUserButton onClick={onLogout}>로그아웃</UpdateUserButton>
          <UpdateUserButton>탈퇴하기</UpdateUserButton>
        </UpdateUserButtonOutline>
      </Base>
    </>
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

export const getStaticProps = () => {
  return {
    props: {
      user: 'hi',
    },
  };
};

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
