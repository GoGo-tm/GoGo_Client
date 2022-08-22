import React from 'react';
import { AuthRadioBase, AuthRadioButton, AuthRadioLabel } from './styled';

interface Props {
  label: string;
  require?: boolean;
}

const AuthRadio = React.memo(function Radio({ label, require }: Props) {
  return (
    <AuthRadioBase>
      <AuthRadioButton />
      <AuthRadioLabel>
        {label} {`(${require ? '필수' : '선택'})`}
      </AuthRadioLabel>
    </AuthRadioBase>
  );
});

export default AuthRadio;
