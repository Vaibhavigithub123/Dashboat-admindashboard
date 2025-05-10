import React from "react";
import css from "./Analytics.module.css";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import BarChart from "./Charts/BarChart";

const Analytics = () => {
  return (
    <div className={css.analyticsContainer}>
      <div className={css.analyticsTop}>
        <LineChart />
        <PieChart />
      </div>

      <div className={css.analyticsBottom}>
        <BarChart />
      </div>
    </div>
  );
};

export default Analytics;
