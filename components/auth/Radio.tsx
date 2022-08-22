import React from 'react';
import { Radio } from 'antd';

interface Props {
  label: string;
  require?: boolean;
}

const AuthRadio = React.memo(function AuthRadio({ label, require }: Props) {
  return (
    <div>
      <Radio />
      <label>
        {label} {`(${require ? '필수' : '선택'})`}
      </label>
    </div>
  );
});

export default AuthRadio;
