import { Radio } from 'antd';
import styled from 'styled-components';

const AuthForm = styled.form`
  padding-top: 2.25rem;
`;

const AuthBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
`;

const AuthInputBase = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const AuthInputOutline = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.625rem;
`;

const AuthInputLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.m2};
  font-weight: 500;
`;

const AuthInputText = styled.input`
  outline: none;
  border: none;
  border-bottom: 0.3px solid #b7b7b7;
  padding: 0;
  padding-bottom: 0.5rem;
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.r3};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray.dense};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const AuthRadioBase = styled.div``;

const AuthRadioLabel = styled.label``;

const AuthRadioGroup = styled(Radio.Group);

const AuthRadioButton = styled(Radio)``;

export {
  AuthForm,
  AuthBase,
  AuthInputBase,
  AuthInputLabel,
  AuthInputText,
  AuthInputOutline,
  AuthRadioBase,
  AuthRadioLabel,
  AuthRadioGroup,
  AuthRadioButton,
};
