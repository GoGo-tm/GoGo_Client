import { Divider as AntdDivider } from 'antd';

interface Props {
  margin?: string;
  dense?: string;
  color?: string;
}

const Divider = ({
  margin = '1.75',
  dense = '0.3',
  color = '#B7B7B7',
}: Props) => {
  return (
    <AntdDivider
      style={{
        margin: `${margin}rem 0`,
        borderTop: `${dense}px solid ${color}`,
      }}
    />
  );
};

export default Divider;
