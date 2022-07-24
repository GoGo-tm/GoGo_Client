import location from "./location";
import dayjs from "dayjs";
import axios from "axios";
import { mapToGrid } from "./misc";
import { setCache } from "./cache";
import { getLocalStorageData, setLocalStorageData } from "./localstorage";
import type { WeatherData } from "~/types/weather";
import type { EnvData } from "~/types/env";

type Item = {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
};

const add_0 = ["02", "05", "08", "11", "14", "17", "20", "23"];
const add_1 = ["01", "04", "07", "10", "13", "16", "19", "22"];
const add_2 = ["00", "03", "06", "09", "12", "15", "18", "21"];

const getTodayWeather = async (Arg: EnvData): Promise<WeatherData> => {
  const localStorageData = getLocalStorageData("weather") as
    | WeatherData
    | undefined;

  setCache("test", { title: "hi" });

  const curTime = new Date();
  const targetDate = dayjs(curTime).format("YYYY-MM-DD-HH");
  const [year, month, day, hour] = targetDate.split("-");
  let targetHour: string;
  let sky: string = "";
  let pty: string = "";

  if (!Arg.ENV) throw Error("invalid env");

  if (
    localStorageData &&
    parseInt(localStorageData.base_time) > parseInt(hour)
  ) {
    return localStorageData;
  }

  if (add_0.indexOf(hour) !== -1) targetHour = hour;
  else if (add_1.indexOf(hour) !== -1) targetHour = add_0[add_1.indexOf(hour)];
  else targetHour = add_0[add_2.indexOf(hour)];

  const coords = await location
    .getUserLocation()
    .then((res) => ({ latitude: res.latitude, longitude: res.longitude }));
  const grid: { x: number; y: number } = mapToGrid(
    coords.latitude,
    coords.longitude
  );

  const userLocation = await location.getUserCity(
    coords,
    Arg.ENV.REVERSE_GEOCODING_URL
  );

  const res = await axios.get(
    `${Arg.ENV.WEATHER_API_URL}?ServiceKey=${
      Arg.ENV.WEATHER_API_KEY
    }&numOfRows=10&pageNo=1&base_date=${year + month + day}&base_time=${
      targetHour + "00"
    }&nx=${grid.x}&ny=${grid.y}&dataType=JSON`
  );

  if (res.status !== 200) throw Error("invalid api");

  const items = res.data.response.body.items["item"] as Item[];

  for (const iter of items) {
    if (iter.category === "SKY") {
      sky = iter.fcstValue;
    }
    if (iter.category === "PTY") {
      pty = iter.fcstValue;
    }
  }

  const nextTime = new Date(curTime);
  nextTime.setHours(parseInt(targetHour) + 3);
  const [tyear, tmonth, tday, thour] = dayjs(nextTime)
    .format("YYYY-MM-DD-HH")
    .split("-");

  const data: WeatherData = {
    base_date: tyear + tmonth + tday,
    base_time: thour,
    sky,
    pty,
    userLocation,
  };

  setLocalStorageData("weather", data);

  return data;
};

export { getTodayWeather };
