import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import * as mapService from '~/utils/map';

interface Props {
  geometries: { latitude: number; longitude: number }[];
}

const HikingMap = ({ geometries }: Props) => {
  const mapRef = useRef<HTMLElement | null | any>(null);

  useEffect(() => {
    const coords = mapService.tm123ToCoords(geometries);
    const mid = Math.floor(coords.length / 2);

    mapRef.current = new naver.maps.Map('map', {
      zoom: 14,
      center: coords[mid],
    });

    new naver.maps.Polyline({
      path: coords,
      strokeColor: '#EB305D',
      strokeOpacity: 0.8,
      strokeWeight: 4,
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
  }, [geometries]);

  return <Map id="map" />;
};

export default HikingMap;

const Map = styled.div`
  width: 100%;
  height: 300px;
`;
