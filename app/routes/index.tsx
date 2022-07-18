import Banner from "~/components/Banner";
import Button from "~/components/common/Button";
import Card from "~/components/common/Card";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type LoaderData = {
  ENV: {
    WEATHER_API_URL: string;
    WEATHER_API_KEY: string;
  };
};

export type EnvData = Pick<LoaderData, "ENV">;

export const loader: LoaderFunction = async () => {
  return json({
    ENV: {
      WEATHER_API_URL: process.env.WEATHER_API_URL,
      WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    },
  });
};

export default function Home() {
  const data = useLoaderData<LoaderData>();

  return (
    <main className="w-full">
      {/* <span className="ml-5">안녕하세요</span> */}
      <Banner ENV={data.ENV} />
      <Card />
      <Button event={() => console.log("click")}>Click</Button>
    </main>
  );
}
