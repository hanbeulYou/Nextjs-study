import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { Coordinates } from '../../types/store';
import { NaverMap } from '../../types/map';
import { INITIAL_CENTER, INITIAL_ZOOM } from '../../hooks/useMap';

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};

const Map = ({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: Props) => {
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html */
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    // onLoad는 스크립트 생성시
    // onReady는 마운트시
    if (onLoad) {
      onLoad(map);
    }
  };

  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} style={{ width: '100%', height: '100%' }} />
    </>
  );
};

export default Map;

// Script의 strategy 옵션 : "afterInteractive" | "lazyOnload" | "beforeInteractive" | "worker"
// afterInteractive : 바로 렌더링
// lazyOnload : 레이지로딩
// beforeInteractive : 좀 급하게 페이지 전체에서..
