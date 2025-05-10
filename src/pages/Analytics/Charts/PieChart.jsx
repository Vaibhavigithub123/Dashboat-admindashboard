import React from "react";
import css from "../Analytics.module.css";
import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "66%",
        center: ["72%", "55%"],
        data: [
          { value: 1000, name: "Beauty Products" },
          { value: 735, name: "Electronics" },
          { value: 580, name: "Arts & Crafts" },
          { value: 484, name: "Apple Airpods" },
          { value: 300, name: "Language courses" },
          { value: 200, name: "Pets Supplies" },
          { value: 350, name: "Fashion Accessories" },
          { value: 350, name: "Cookware" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          color: "#fff", // label text color
        },
      },
    ],
  };
  return (
    <div className={`${css.pieChartcontainer} themeContainer`}>
      <span className={css.title}>Products Category</span>

      <ReactECharts option={option} className={css.piechart} />
    </div>
  );
};

export default PieChart;
