"use client";
import React from "react";
import { NavigateIcon } from "@/svgs";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import "./AverageOrganizationChart.scss";

interface DataItem {
  name: string;
  value: number;
  color: string;
}
interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  active?: boolean;
  payload?: {
    value: number;
    payload: DataItem;
  }[];
  coordinate?: {
    x: number;
    y: number;
  };
}
const AverageOrganizationChart = () => {
  const data: DataItem[] = [
    { name: "Premium", value: 4000, color: "#007bff" },
    { name: "Standard", value: 3000, color: "#66c2ff" },
    { name: "Custom", value: 2000, color: "#b3e0ff" },
    { name: "Basic", value: 1000, color: "#e3f8ff" },
  ];

  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    coordinate,
  }) => {
    if (active && payload && payload.length && coordinate) {
      const value = payload[0].value;
      const percent = (((value as number) / total) * 100).toFixed(0);
      const color = (payload[0].payload as DataItem).color;

      return (
        <div
          className="percent-bubble-wrapper"
          style={{
            position: "absolute",
            top: coordinate.y - 50,
            left: coordinate.x - 16,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          <div
            className="percent-bubble"
            style={{ border: `2px solid ${color}` }}
          >
            {percent}%
          </div>
        </div>
      );
    }

    return null;
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
          <div className="legend-col premium">
            <div></div>
            <h2>
              Premium Organizations
              <span>40000</span>
            </h2>
          </div>
          <div className="legend-col standard">
            <div></div>
            <h2>
              Standard Organizations
              <span>30000</span>
            </h2>
          </div>
          <div className="legend-col custom">
            <div></div>
            <h2>
              Custom Organizations
              <span>20000</span>
            </h2>
          </div>
          <div className="legend-col basic">
            <div></div>
            <h2>
              Basic Organizations
              <span>10000</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="chart-box">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={data}
              cx="50%"
              cy="90%"
              startAngle={180}
              endAngle={0}
              innerRadius={100}
              outerRadius={180}
              dataKey="value"
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AverageOrganizationChart;
