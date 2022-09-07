import { Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';

const AuthBase = styled.div<{ root?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
  padding-top: ${({ root }) => root && '2.25rem'};
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

const AuthForm = styled(Form)`
  line-height: inherit;
`;

const AuthFormItem = styled(Form.Item)<{ full?: boolean }>`
  width: ${({ full }) => full && '100%'};
  margin-bottom: 0;
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
  .ant-input-affix-wrapper {
    border-radius: 0;
  }
  .ant-input {
    border-radius: 0;
  }
  .ant-form-item-feedback-icon-success {
    color: ${({ theme }) => theme.colors.primary};
  }
  .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  svg {
    cursor: pointer;
  }
`;

const AuthInput = styled(Input)`
  outline: none;
  border: none;
  border-bottom: 0.3px solid #b7b7b7;
  padding: 0;
  padding-bottom: 0.5rem;
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.r3};
    font-weight: 400;
    /* color: ${({ theme }) => theme.colors.gray.dense}; */
  }
  &:focus {
    box-shadow: none;
  }
`;

const AuthCheckBoxBase = styled.div`
  display: flex;
`;

const AuthCheckBox = styled(Checkbox)`
  .ant-checkbox-inner {
    border-radius: 7.5px;
  }
`;

const AuthTermsBase = styled.main`
  white-space: pre-wrap;
  line-height: 1.563rem;
  font-size: ${({ theme }) => theme.fontSize.r3};
  margin: 1.75rem 2.313rem;
`;

export {
  AuthBase,
  AuthCheckBox,
  AuthCheckBoxBase,
  AuthForm,
  AuthFormItem,
  AuthInput,
  AuthInputBase,
  AuthInputLabel,
  AuthInputOutline,
  AuthInputText,
  AuthTermsBase,
};
