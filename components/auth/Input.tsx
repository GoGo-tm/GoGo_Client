import type { PropsWithChildren } from 'react';
import { AuthInputBase, AuthInputLabel, AuthInputText } from './styled';

interface Props extends PropsWithChildren {
  label: string;
  placeholder: string;
  type?: 'text' | 'password';
}

const AuthInput = ({ label, placeholder, type = 'text' }: Props) => {
  return (
    <AuthInputBase>
      <AuthInputLabel>{label}</AuthInputLabel>
      <AuthInputText type={type} placeholder={placeholder} />
    </AuthInputBase>
  );
};

export default AuthInput;
