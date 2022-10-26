import { Skeleton } from 'antd';
import { forwardRef, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface MyImageLoadingProps extends PropsWithChildren {
  loading?: boolean;
}

const MylogImageLoading = forwardRef<HTMLDivElement>(function MylogImageLoading(
  props,
  ref
) {
  return (
    <MylogImageLoadingBase ref={ref} {...props}>
      <Skeleton.Image
        active
        style={{
          width: '22.375rem',
          height: '22.375rem',
          borderRadius: '10px',
        }}
      />
    </MylogImageLoadingBase>
  );
});

const MyImageLoading = ({ children, loading }: MyImageLoadingProps) => {
  return (
    <Skeleton active loading={loading}>
      {children}
    </Skeleton>
  );
};

const BannerLoading = () => {
  return (
    <Skeleton.Image active style={{ width: '100%', height: '21.25rem' }} />
  );
};

export { BannerLoading, MyImageLoading, MylogImageLoading };

const MylogImageLoadingBase = styled.div`
  position: absolute;
  z-index: 999;
`;
