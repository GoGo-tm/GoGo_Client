type Coords = {
  latitude: number;
  longitude: number;
};

type Administrative = {
  adminLevel: number;
  description: string;
  geonameId: number;
  isoCode: string;
  isoName: string;
  name: string;
  order: number;
  wikidataId: string;
};

type WeatherData = {
  base_date: string;
  base_time: string;
  pty: string;
  sky: string;
  userLocation: string;
};

export type { Coords, Administrative, WeatherData };
