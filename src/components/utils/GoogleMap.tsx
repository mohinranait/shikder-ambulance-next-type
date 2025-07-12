"use client";
import { GOOGLE_MAP } from "@/config/accessEnv";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FC } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.8103,
  lng: 90.4125,
};

const GoogleMapComponent: FC = () => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP || ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
