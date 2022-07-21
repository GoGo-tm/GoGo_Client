type LoaderData = {
  ENV: {
    WEATHER_API_URL: string;
    WEATHER_API_KEY: string;
    REVERSE_GEOCODING_URL: string;
  };
};

export type EnvData = Pick<LoaderData, "ENV">;
