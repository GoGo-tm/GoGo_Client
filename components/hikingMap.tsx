import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import * as mapService from '~/utils/map';

interface Props {
  hiking: {
    geometries: { latitude: number; longitude: number }[];
  };
}

const HikingMap = ({ hiking }: Props) => {
  const mapRef = useRef<HTMLElement | null | any>(null);

  useEffect(() => {
    const coords = mapService.tm123ToCoords(hiking.geometries);
    const mid = Math.floor(coords.length / 2);

    mapRef.current = new naver.maps.Map('map', {
      zoom: 16,
      center: coords[mid],
    });

    new naver.maps.Polyline({
      path: coords,
      strokeColor: '#FF0000',
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
  }, [hiking.geometries]);

  return <Map id="map"></Map>;
};

export default HikingMap;

const Map = styled.div`
  width: 800px;
  height: 800px;
`;
