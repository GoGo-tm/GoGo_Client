type LoaderData = {
  ENV?: {
    WEATHER_API_URL: string;
    WEATHER_API_KEY: string;
  };
};

export type EnvData = Pick<LoaderData, "ENV">;
