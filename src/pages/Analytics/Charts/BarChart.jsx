import React from "react";
import css from "../Analytics.module.css";
import ReactECharts from "echarts-for-react";
import { ordersData } from "../../../data/data";

const BarChart = () => {
  const names = ordersData.map((item) => item.name);
  const revenues = ordersData.map((item) => item.items * Number(item.price));
  const colors = ordersData.map((item) =>
    item.status === "active" ? "#27ae60" : "#e74c3c"
  );

  const option = {
    title: {
      text: "Product Performance (Revenue)",
      textStyle: {
        color: "#fff",
        fontSize: 18,
      },
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "#333",
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      data: names,
      axisLabel: {
        color: "#fff",
        rotate: 30,
        fontSize: 12,
      },
      axisLine: {
        lineStyle: {
          color: "#aaa",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          color: "#444",
        },
      },
      axisLine: {
        lineStyle: {
          color: "#aaa",
        },
      },
    },
    series: [
      {
        data: revenues.map((value, index) => ({
          value,
          itemStyle: {
            color: colors[index],
          },
        })),
        type: "bar",
        barWidth: "60%",
      },
    ],
  };
  return (
    <div className={`${css.barChartcontainer} themeContainer`}>
      <span className={css.title}>Products Performance</span>

      <ReactECharts option={option} style={{ height: "400px" }} />
    </div>
  );
};
export default BarChart;
