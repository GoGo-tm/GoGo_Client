import Banner from "~/components/Banner";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type LoaderData = {
  ENV: {
    WEATHER_API_URL: string;
    WEATHER_API_KEY: string;
  };
};

export const loader: LoaderFunction = async () => {
  return json({
    ENV: {
      WEATHER_API_URL: process.env.WEATHER_API_URL,
      WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    },
  });
};

const HomeRooteRoute = () => {
  const data = useLoaderData<LoaderData>();
  return (
    // 배너
    <main>
      <Banner ENV={data.ENV} />
      <div>{/* <h1>홈 라우트</h1> */}</div>
    </main>
  );
};

export default HomeRooteRoute;
