import { AuthInputBase, AuthInputLabel } from './styled';
import type { PropsWithChildren } from 'react';

interface AuthInputProps extends PropsWithChildren {
  label: string;
}

const AuthLabel = ({ label, children }: AuthInputProps) => {
  return (
    <AuthInputBase>
      <AuthInputLabel>{label}</AuthInputLabel>
      {children}
    </AuthInputBase>
  );
};

export default AuthLabel;
