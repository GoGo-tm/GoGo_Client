import SEOUL_METRO from "~/constants/coord";
import cash from "./cash";

export type Coords = {
  latitude: number;
  longitude: number;
};

export default {
  async getUserLocation() {
    const cashData: Coords = JSON.parse(cash.getCashData("coords"));

    if (cashData) return cashData;

    const cord = SEOUL_METRO;

    if (!navigator.geolocation) return cord;

    const res = await new Promise((res, rej) =>
      navigator.geolocation.getCurrentPosition(res, rej)
    ).then((data): GeolocationPosition => data as GeolocationPosition);

    const data: Coords = {
      latitude: res.coords.latitude,
      longitude: res.coords.longitude,
    };

    cash.setCashData("coords", JSON.stringify(data));

    return data;
  },
};
