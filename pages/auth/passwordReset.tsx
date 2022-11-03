import { Form, Input } from 'antd';
import axios from 'axios';
import Image from 'next/legacy/image';
import { ReactElement } from 'react';
import styled from 'styled-components';

import Layout from '~/components/layout';
import type { NextPageWithLayout } from '~/types/base';

import * as misc from '../../utils/misc';

interface FormData {
  txId: string;
  email: string;
}

const PasswordReset: NextPageWithLayout<{}> = () => {
  const onSubmit = async (values: FormData) => {
    try {
      const response = await axios
        .post('/server/api/members/change-password', {
          txId: values?.txId,
          email: values?.email,
        })
        .then(() => alert('임시 비밀번호를 전송했어요.'));
      return response;
    } catch (error) {
      alert('다시 시도해 주세요.');
      throw new Error(misc.getErrorMessage(error));
    }
  };

  return (
    <Base full>
      <Wrapper>
        <Image
          src="/images/01_Logotype.png"
          alt="logo"
          width={90}
          height={25}
        />
        <Text>
          고고에 가입했던 이메일을 입력해 주세요.
          <br />
          비밀번호 재설정 메일을 보내드립니다.
        </Text>
        <Form
          style={{ padding: '0 1rem', width: '100%' }}
          name="update"
          onFinish={onSubmit}
        >
          <Form.Item name="email">
            <ChangeInput type="email" placeholder="이메일을 입력해 주세요." />
          </Form.Item>
          <ChangeButton type="submit">비밀번호 재설정</ChangeButton>
        </Form>
      </Wrapper>
    </Base>
  );
};

PasswordReset.getLayout = function (page: ReactElement) {
  return <Layout title="비밀번호 설정">{page}</Layout>;
};

export default PasswordReset;

const Base = styled.div<{ full?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  height: ${({ full }) => full && '100%'};
  font-size: ${({ theme }) => theme.fontSize.m3};
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  padding: 1rem 0;
  text-align: center;
  line-height: 1.4rem;
`;

const ChangeInput = styled(Input)`
  padding: 0.8rem 0;
  border: none;
  border-bottom: 1px solid #d9d9d9;
`;

const ChangeButton = styled.button`
  border: 1.5px solid #009d68;
  background-color: white;
  border-radius: 2rem;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  height: 3rem;
  margin-top: 1.2rem;
`;
