import Layout from "~/components/layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "~/types/base";

const Hiking: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <h1>Hiking</h1>
    </div>
  );
};

Hiking.getLayout = function (page: ReactElement) {
  return <Layout title="Hiking">{page}</Layout>;
};

export default Hiking;
