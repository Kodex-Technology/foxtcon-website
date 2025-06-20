"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { DropDownIcon, ChartEarningIcon } from "@/svgs";
import "./PaymentChart.scss";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
interface PaymentChartProps {
  filter: "Monthly" | "Weekly" | "Yearly";
  onFilterChange: (value: "Monthly" | "Weekly" | "Yearly") => void;
  series: ApexAxisChartSeries;
  categories: string[];
}

const PaymentChart: React.FC<PaymentChartProps> = ({
  filter,
  onFilterChange,
  series,
  categories,
}) => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "18%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    grid: {
      strokeDashArray: 4,
      xaxis: {
        lines: { show: false },
      },
      yaxis: {
        lines: { show: true },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: (val: number) => `$${val}`,
    },
    xaxis: {
      categories,
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `$${val / 1000}K`,
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
      position: "bottom",
    },
    colors: ["#ECF3F7", "#7CA2EE"],
  };

  return (
    <div className="bar-chart-wrapper">
      <div className="chart-header">
        <div className="common-title">
          <h2>Payment Overview</h2>
          <span>
            <div className="net-profit"></div>Net Profit
          </span>
          <span>
            <div className="gross-profit"></div>Gross Profit
          </span>
        </div>
        <div className="filter">
          <select
            onChange={(e) =>
              onFilterChange(e.target.value as "Monthly" | "Weekly" | "Yearly")
            }
            value={filter}
          >
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
            <option value="Weekly">Weekly</option>
          </select>
          <DropDownIcon />
        </div>
      </div>
      <div className="earning-stat">
        <ChartEarningIcon />
        <h3>
          <span>Total Earning</span>
          $12166.01
        </h3>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default PaymentChart;
