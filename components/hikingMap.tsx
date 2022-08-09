import { useEffect, useRef } from "react";
import { tm123ToCoords } from "~/utils/map";
import styled from "styled-components";

interface Props {
  tm123: {
    paths: number[][];
  };
}

const HikingMap = ({ tm123 }: Props) => {
  const mapRef = useRef<HTMLElement | null | any>(null);

  useEffect(() => {
    const coords = tm123ToCoords(tm123.paths);
    const mid = Math.floor(coords.length / 2);

    mapRef.current = new naver.maps.Map("map", {
      zoom: 16,
      zoomControl: true,
      center: coords[mid],
    });

    new naver.maps.Polyline({
      path: coords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 6,
      map: mapRef.current,
    });

    new naver.maps.Marker({
      position: coords[0],
      map: mapRef.current,
    });

    new naver.maps.Marker({
      position: coords[coords.length - 1],
      map: mapRef.current,
    });
  }, []);

  return <Map id="map"></Map>;
};

export default HikingMap;

const Map = styled.div`
  width: 800px;
  height: 800px;
`;
