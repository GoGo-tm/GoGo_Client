import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import dynamic from 'next/dynamic';

import AsyncBoundary from '~/components/boundaries/asyncBoundary';

const HikingMap = dynamic(() => import('~/components/hikingMap'), {
  ssr: false,
});

const HikingById: NextPage = ({
  hiking,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <h1>hello</h1>
      <AsyncBoundary
        pendingFallback={<div>loading..</div>}
        rejectedFallback={<div>error...</div>}
      >
        <HikingMap hiking={hiking} />
      </AsyncBoundary>
    </div>
  );
};

export default HikingById;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/server/api/hiking-trails/${params?.id}`
  );

  if (!response.ok) throw Error('error');

  const hiking: number[][] = await response.json();

  return {
    props: {
      hiking,
    },
  };
};
