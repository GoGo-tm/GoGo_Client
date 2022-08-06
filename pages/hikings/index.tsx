import Layout from "~/components/layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "~/types/base";

const Hikings: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <h1>Hikings</h1>
    </div>
  );
};

Hikings.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Hikings;
