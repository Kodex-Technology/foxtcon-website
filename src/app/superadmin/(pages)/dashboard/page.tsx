"use client";
import React, { useState } from "react";
import "./page.scss";
import PaymentChart from "@/components/superadmin/Dashboard/PaymentChart/PaymentChart";
import StatsCard from "@/components/superadmin/Dashboard/StatsCard/StatsCard";
const DashboardPage = () => {
  const [filter, setFilter] = useState<"Monthly" | "Weekly" | "Yearly">(
    "Monthly",
  );

  const dataSets = {
    Monthly: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      series: [
        {
          name: "Net Profit",
          data: [
            12000, 15000, 14000, 17000, 18000, 16000, 19000, 20000, 21000,
            22000, 23000, 24000,
          ],
        },
        {
          name: "Gross Profit",
          data: [
            8000, 7000, 6000, 8000, 9000, 8500, 9000, 9500, 10000, 9000, 10000,
            11000,
          ],
        },
      ],
    },
    Weekly: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      series: [
        { name: "Net Profit", data: [3000, 3500, 4000, 3800] },
        { name: "Gross Profit", data: [1500, 1700, 1600, 1750] },
      ],
    },
    Yearly: {
      categories: ["2021", "2022", "2023", "2024"],
      series: [
        { name: "Net Profit", data: [180000, 200000, 210000, 230000] },
        { name: "Gross Profit", data: [90000, 100000, 105000, 115000] },
      ],
    },
  };

  const { series, categories } = dataSets[filter];
  return (
    <div className="container-fluid">
      <div className="dashboard-summary">
        <StatsCard />
        <PaymentChart
          filter={filter}
          onFilterChange={setFilter}
          series={series}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
