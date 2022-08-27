import type { RuleObject } from 'antd/lib/form';

const validator = {
  email: (_: RuleObject, value: string) => {
    const emailRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (!value) return Promise.reject(new Error('이메일을 입력해주세요.'));
    if (!value.match(emailRegExp))
      return Promise.reject(new Error('올바른 이메일 양식이 아닙니다.'));
    return Promise.resolve();
  },
  nickname: (_: RuleObject, value: string) => {
    const nicknameRegExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
    if (!value) return Promise.reject(new Error('닉네임을 입력해주세요.'));
    if (!value.match(nicknameRegExp))
      return Promise.reject(new Error('올바른 닉네임 양식이 아닙니다.'));
    return Promise.resolve();
  },
  password: (_: RuleObject, value: string) => {
    const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!value) return Promise.reject(new Error('비밀번호를 입력해주세요.'));
    if (!value.match(passwordRegExp))
      return Promise.reject(new Error('올바른 비밀번호 양식이 아닙니다.'));
    return Promise.resolve();
  },
};

export default validator;
