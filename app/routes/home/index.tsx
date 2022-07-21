import Banner from "~/components/Banner";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

type LoaderData = {
  ENV: {
    WEATHER_API_URL: string;
    WEATHER_API_KEY: string;
    REVERSE_GEOCODING_URL: string;
  };
};

export const loader: LoaderFunction = async () => {
  return json({
    ENV: {
      WEATHER_API_URL: process.env.WEATHER_API_URL,
      WEATHER_API_KEY: process.env.WEATHER_API_KEY,
      REVERSE_GEOCODING_URL: process.env.REVERSE_GEOCODING_URL,
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
