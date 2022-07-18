import cash from "../lib/cash";
import location from "../lib/location";
import mapToGrid from "../lib/mapToGrid";
import dayjs from "dayjs";
import axios from "axios";
import type { EnvData } from "~/routes";

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

export default {
  async getTodayWeather(Arg: EnvData) {
    const cashData = JSON.parse(cash.getCashData("weather"));
    const curTime = new Date();
    const targetDate = dayjs(curTime).format("YYYY-MM-DD-HH");
    const [year, month, day, hour] = targetDate.split("-");
    let targetHour: string;
    let sky: string = "";
    let pty: string = "";

    if (!Arg.ENV) return;

    if (cashData && parseInt(cashData.base_time) > parseInt(hour)) {
      return cashData;
    }

    if (add_0.indexOf(hour) !== -1) targetHour = hour;
    else if (add_1.indexOf(hour) !== -1)
      targetHour = add_0[add_1.indexOf(hour)];
    else targetHour = add_0[add_2.indexOf(hour)];

    const coords: { x: number; y: number } = await location
      .getUserLocation()
      .then((res) => mapToGrid(res.latitude, res.longitude));

    const res = await axios
      .get(
        `${Arg.ENV.WEATHER_API_URL}?ServiceKey=${
          Arg.ENV.WEATHER_API_KEY
        }&numOfRows=10&pageNo=1&base_date=${year + month + day}&base_time=${
          targetHour + "00"
        }&nx=${coords.x}&ny=${coords.y}&dataType=JSON`
      )
      .then((res) => res.data.response.body.items["item"] as Item[]);

    for (const iter of res) {
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

    const data = {
      base_date: tyear + tmonth + tday,
      base_time: thour,
      sky,
      pty,
    };

    cash.setCashData("weather", JSON.stringify(data));

    return data;
  },
};
