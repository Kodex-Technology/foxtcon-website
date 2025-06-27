"use client";
import React from "react";
import { LoadScript } from "@react-google-maps/api";
import Loader from "@/components/common/Loader/Loader";

interface GoogleLoaderProps {
  children: React.ReactNode;
}

const GoogleLoader: React.FC<GoogleLoaderProps> = ({ children }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <LoadScript googleMapsApiKey={apiKey} loadingElement={<Loader />}>
      {children}
    </LoadScript>
  );
};

export default GoogleLoader;
