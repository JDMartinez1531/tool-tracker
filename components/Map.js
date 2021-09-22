import {useState} from "react"
import ReactMapGL, {GeolocateControl} from "react-map-gl"

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10
};
const positionOptions = {enableHighAccuracy: true};

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 30.5 ,
    longitude: -97.7,
    zoom: 3,
    bearing: 0,
    pitch: 0
  })
  return (
    <ReactMapGL
    {...viewport}
    width="100%"
    height="100%"
    mapStyle="mapbox://styles/jdmairtinez/cktesg0b72m9218qjqw9ywrgb"
    onViewportChange={setViewport}
    mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    
    >
      <GeolocateControl
      style={geolocateStyle}
      positionOptions={positionOptions}
      trackUserLocation
      // auto
      />
    </ReactMapGL>
  )
}
