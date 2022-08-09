const tm123ToCoords = (paths: number[][]) => {
  return paths.map((point) =>
    naver.maps.TransCoord.fromTM128ToLatLng(
      new naver.maps.Point(point[0], point[1])
    )
  );
};

export { tm123ToCoords };
