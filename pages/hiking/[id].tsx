import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import dynamic from "next/dynamic";
import AsyncBoundary from "~/components/asyncBoundary";

const HikingMap = dynamic(() => import("~/components/hikingMap"), {
  ssr: false,
});

const HikingById: NextPage = ({
  tm123,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <h1>hello</h1>
      <AsyncBoundary
        pendingFallback={<div>loading..</div>}
        rejectedFallback={<div>error...</div>}
      >
        <HikingMap tm123={tm123} />
      </AsyncBoundary>
    </div>
  );
};

export default HikingById;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch("http://localhost:3000/api/hiking");

  if (!res.ok) throw Error("error");

  const tm123: number[][] = await res.json();

  return {
    props: {
      tm123,
    },
  };
};
