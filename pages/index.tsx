import { GetServerSideProps } from "next";
import Layout from "~/components/layout";
import type { InferGetServerSidePropsType } from "next/types";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "~/types/base";

const Home: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = "";

  return {
    props: {
      user: res,
    },
  };
};
