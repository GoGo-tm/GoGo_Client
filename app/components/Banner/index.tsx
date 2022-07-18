import { useCallback, useEffect } from "react";
import type { FunctionComponent } from "react";
import type { EnvData } from "~/routes/index";
import weather from "~/utils/api/weather";
import useCurrentLocation from "~/hooks/useCurrentLocation";

type BannerProps = FunctionComponent<EnvData>;

const Banner: BannerProps = (props) => {
  const data = useCurrentLocation();
  const ENV = {
    ENV: props.ENV,
  };

  const getWeather = useCallback(async () => {
    const res = await weather.getTodayWeather(ENV).then((res) => res);
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
