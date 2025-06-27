"use client";
import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { googleMapPinDataUri } from "@/svgs";
import { landOnlyStyle } from "./mapStyle";
import { GoogleMapComponentProps } from "@/types/map";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.0902,
  lng: -95.7129,
};

const mapOptions: google.maps.MapOptions = {
  styles: landOnlyStyle,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: true,
};

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  locations,
}) => {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
      options={mapOptions}
    >
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          icon={{
            url: googleMapPinDataUri,
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          label={{
            text: location.label[0],
            fontSize: "12px",
            color: "#fff",
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
