"use client";
import React from "react";
import "./MapView.scss";

const MapView = () => {
  return (
    <div className="map-wrapper">
      <div className="common-title">
        <h2>Map View</h2>
        <p>
          Showing <span>5</span> branches across 5 States of United States of
          America...
        </p>
      </div>
      <div className="map-box">
        <img src="/images/map-2.png" alt="map" />
      </div>
      <div className="map-legend">
        <div className="legend-col">
          <div></div>
          <span>California</span>
        </div>
        <div className="legend-col">
          <div></div>
          <span>New York</span>
        </div>
        <div className="legend-col">
          <div></div>
          <span>Florida</span>
        </div>
        <div className="legend-col">
          <div></div>
          <span>Texas</span>
        </div>
        <div className="legend-col">
          <div></div>
          <span>Washington</span>
        </div>
      </div>
    </div>
  );
};

export default MapView;
