"use client";
import React from "react";
import { NavigateIcon } from "@/svgs";
import "./AverageOrganizationChart.scss";
interface CSSVars extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}
interface Props {
  value: number;
}

const AverageOrganizationChart = ({ value }: Props) => {
  const style: CSSVars = {
    "--percentage": value,
    "--fill": "#5C9EFF",
  };
  return (
    <div className="pie-chart-wrapper">
      <div className="chart-content">
        <div className="chart-header">
          <div className="common-title">
            <h2>Organization Plans</h2>
          </div>
          <button>
            <NavigateIcon />
          </button>
        </div>
        <div className="chart-legend">
          <div className="legend-col premimum">
            <div></div>
            <h2>
              Premium Organizations
              <span>40000</span>
            </h2>
          </div>
          <div className="legend-col basic">
            <div></div>
            <h2>
              Basic Organizations
              <span>1000</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="chart-box">
        <div className="semi-donut " style={style}>
          {value}%
        </div>
      </div>
    </div>
  );
};

export default AverageOrganizationChart;
