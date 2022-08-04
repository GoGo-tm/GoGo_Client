import Layout from "~/components/layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "~/types/base";

const Profile: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <h1>profile</h1>
    </div>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Profile;
