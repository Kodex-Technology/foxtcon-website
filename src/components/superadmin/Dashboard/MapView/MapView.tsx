"use client";
import React from "react";
import "./MapView.scss";
import GoogleMapComponent from "@/google/GoogleMapComponent/GoogleMapComponent";
import { locations } from "@/data/locationData";

const MapView = () => {
  return (
    <div className="map-wrapper">
      <div className="common-title">
        <h2>Map View</h2>
        <p>
          Showing <span>{locations.length}</span> branches across{" "}
          {locations.length} States of United States of America...
        </p>
      </div>
      <div className="map-box">
        <GoogleMapComponent locations={locations} />
      </div>
      <div className="map-legend">
        {locations.map((loc, i) => (
          <div className="legend-col" key={i}>
            <div></div>
            <span>{loc.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapView;
