import VAC from "./vac";
import { useCallback, useEffect, useState } from "react";
import { getTodayWeather } from "~/utils/api/weather";
import type { FunctionComponent } from "react";
import type { EnvData } from "~/types/env";

type BannerProps = FunctionComponent<EnvData>;

export type Props = Partial<State>;

type State = {
  userLocation: string;
  landing: string;
  weather: string;
};

const Banner: BannerProps = ({ ENV: env }) => {
  const [weather, setWeather] = useState<State>();

  const getWeather = useCallback(async () => {
    await getTodayWeather(ENV).then((res) => {
      const imags = getFilterImages(res.pty, res.sky);
      const data = {
        ...imags,
        userLocation: res.userLocation,
      };
      setWeather(() => ({
        ...data,
      }));
    });
  }, []);

  const getFilterImages = (pty: string, sky: string) => {
    let landing: string = "Sunny_Landing.png";
    let weather: string = "Sunny.png";

    if (pty !== "0") {
      landing = "Rainy_Landing.png";
      switch (pty) {
        case "1":
          weather = "Rainy.png";
          break;
        case "2":
          weather = "Snow_Rainy.png";
          break;
        case "3":
          weather = "Snow.png";
          break;
        case "4":
          weather = "Shower.png";
          break;
        default:
          break;
      }
      return {
        landing,
        weather,
      };
    }

    switch (sky) {
      case "1":
        weather = "Sunny.png";
        break;
      case "3":
        weather = "Very_Cloudy.png";
        break;
      case "4":
        weather = "Cloudy.png";
        break;
      default:
        break;
    }
    return {
      landing,
      weather,
    };
  };

  const props = {
    ...weather,
  };

  const ENV = {
    ENV: env,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      getWeather();
    }
  }, []);

  return <VAC {...props} />;
};

export default Banner;

// * 1 맑음, 3 구름 많음, 4 흐림
// * 0 비 안옴, 1 비, 2 비/눈, 3 눈, 4 소나기
