import { Skeleton } from 'antd';
import { PropsWithChildren } from 'react';

interface MyImageLoadingProps extends PropsWithChildren {
  loading?: boolean;
}

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

export { BannerLoading, MyImageLoading };
