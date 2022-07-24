import axios from "axios";
import SEOUL_METRO from "~/constants/coord";
import type { Administrative, Coords } from "~/types/weather";

export default {
  async getUserLocation() {
    const cord = SEOUL_METRO;

    if (!navigator.geolocation) return cord;

    const res = await new Promise((res, rej) =>
      navigator.geolocation.getCurrentPosition(res, rej)
    ).then((data): GeolocationPosition => data as GeolocationPosition);

    const data: Coords = {
      latitude: res.coords.latitude,
      longitude: res.coords.longitude,
    };

    return data;
  },
  async getUserCity({ latitude, longitude }: Coords, url: string) {
    const res = await axios.get(
      `${url}?latitude=${latitude}&longitude=${longitude}&localityLanguage=ko`
    );

    if (res.status !== 200) throw Error("invalid request");

    const locationData: Administrative[] =
      res.data.localityInfo["administrative"];
    const userLocation = locationData
      .map((los) => los.name)
      .join(" ")
      .replace("대한민국", "")
      .trim();

    return userLocation;
  },
};
