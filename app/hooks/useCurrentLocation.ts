import { useEffect, useState } from "react";

type Hooks = {
  latitude: number;
  longitude: number;
};

export default function useCurrentLocation() {
  const [location, setLocation] = useState<Hooks>();
  const [error, setError] = useState<string>("");

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  const handleError: PositionErrorCallback = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location, error };
}
