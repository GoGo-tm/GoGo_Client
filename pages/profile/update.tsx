import { Checkbox, Form, Input } from 'antd';
import type { GetStaticPropsContext } from 'next';
import type { ReactElement } from 'react';
import { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import Divider from '~/components/divider';
import Layout from '~/components/layout';

const Update = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const handleOnFocus = useCallback(() => setFocus(true), []);
  const handleOnBlur = useCallback(() => setFocus(false), []);
  const isFocus = useMemo(() => (focus ? true : false), [focus]);
  return (
    <>
      <Base>
        <UpdateForm name="update">
          <UpdateInputOutline>
            <UpdateTextInput type="text" placeholder="닉네임" />
            <UpdateTextInput type="email" placeholder="이메일" />
            <UpdatePasswordOutline
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              focus={isFocus}
            >
              <UpdateCurrentPasswordInput value={'qwe123qwe'} />
              <Divider margin="0.813" />
              <UpdateNewPasswordInput placeholder="신규 비밀번호" />
            </UpdatePasswordOutline>
          </UpdateInputOutline>
          <UpdateButtonOutline>
            <UpdateButton type="submit">변경</UpdateButton>
          </UpdateButtonOutline>
        </UpdateForm>
      </Base>
      <Divider margin="1.313" />
      <Base full>
        <UpdateForm name="term">
          <UpdateCheckBox>
            <UpdateCheckBoxText>위치정보 이용 동의 (선택)</UpdateCheckBoxText>
          </UpdateCheckBox>
        </UpdateForm>
        <UpdateUserButtonOutline>
          <span>로그아웃</span>
          <span>탈퇴하기</span>
        </UpdateUserButtonOutline>
      </Base>
    </>
  );
};

Update.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="내 정보 수정">{page}</Layout>;
};

export default Update;

export const getStaticProps = (ctx: GetStaticPropsContext) => {
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

const UpdateForm = styled(Form)`
  width: 100%;
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: none;
  }
  .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus,
  .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input-focused {
    box-shadow: none;
  }
  .ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused {
    box-shadow: none;
  }
  .ant-form-item-feedback-icon-success {
    color: ${({ theme }) => theme.colors.primary};
  }
  .ant-input {
    font-size: ${({ theme }) => theme.fontSize.m3};
    line-height: 1.563rem;
  }
`;

const UpdateInputOutline = styled.div`
  margin-top: 1.688rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.688rem;
`;

const UpdatePasswordOutline = styled.div<{ focus: boolean }>`
  width: 100%;
  border: ${({ focus, theme }) =>
    focus ? `0.7px solid ${theme.colors.primary}` : '0.7px solid #b2b3b6'};
  border-radius: 0.625rem;
  padding: 0.938rem 1.125rem;
`;

const UpdateButtonOutline = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1.313rem;
`;

const UpdateTextInput = styled(Input)`
  border: 0.7px solid #b2b3b6;
  border-radius: 0.625rem;
  line-height: 1.563rem;
  padding: 0.938rem 2.125rem;
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.r3};
    font-weight: 400;
  }
  &:focus {
    box-shadow: none;
  }
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
  color: ${({ theme }) => theme.colors.gray.dense};
  margin-bottom: 1.25rem;
  span {
    cursor: pointer;
  }
`;

const UpdateCurrentPasswordInput = styled(Input.Password)`
  border: none;
  padding: 0 1rem;
`;

const UpdateNewPasswordInput = styled(Input.Password)`
  border: none;
  padding: 0 1rem;
`;

const UpdateButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  line-height: 1.563rem;
  font-size: ${({ theme }) => theme.fontSize.r3};
  padding: 0.531rem 1.6rem;
  border-radius: 1.563rem;
  cursor: pointer;
`;
const UpdateCheckBox = styled(Checkbox)`
  .ant-checkbox-inner {
    border-radius: 7.5px;
  }
`;

const UpdateCheckBoxText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.r3};
`;
