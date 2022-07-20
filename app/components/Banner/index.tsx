import { useCallback, useEffect } from "react";
import { getTodayWeather } from "~/utils/api/weather";
import type { FunctionComponent } from "react";
import type { EnvData } from "~/types/env";
import VAC from "./vac";

type BannerProps = FunctionComponent<EnvData>;

const Banner: BannerProps = (props) => {
  const ENV = {
    ENV: props.ENV,
  };

  const getWeather = useCallback(async () => {
    // const res = await getTodayWeather(ENV).then((res) => res);
    // console.log(res);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      getWeather();
    }
  }, []);

  return <VAC />;
};

export default Banner;
