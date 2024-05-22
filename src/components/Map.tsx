import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

type MapContainerProps = {
  lat: number;
  lng: number;
};

const MapContainer = ({ lat, lng }: MapContainerProps) => {
  const google_map_url = import.meta.env.VITE_GOOGLE_MAP_API;

  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: lat,
    lng: lng,
  };

  return (
    <LoadScript googleMapsApiKey={google_map_url}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
        {lat && lng && <Marker position={defaultCenter} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
