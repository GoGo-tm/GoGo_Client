import type { PropsWithChildren } from 'react';

import { AuthInputBase, AuthInputLabel } from './styled';

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
