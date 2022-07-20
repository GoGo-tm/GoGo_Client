import { useCallback, useEffect } from "react";
import type { FunctionComponent } from "react";
import type { EnvData } from "~/routes/index";
import { getTodayWeather } from "~/utils/api/weather";

type BannerProps = FunctionComponent<EnvData>;

const Banner: BannerProps = (props) => {
  const ENV = {
    ENV: props.ENV,
  };

  const getWeather = useCallback(async () => {
    const res = await getTodayWeather(ENV).then((res) => res);
    console.log(res);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      getWeather();
    }
  }, []);

  return (
    <div>
      <h1>asd</h1>
    </div>
  );
};

export default Banner;
