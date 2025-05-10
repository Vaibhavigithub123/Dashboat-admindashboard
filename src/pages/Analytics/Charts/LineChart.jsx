import React from "react";
import css from "../Analytics.module.css";
import ReactECharts from "echarts-for-react";

const LineChart = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
      borderWidth: 0,
    },
    xAxis: {
      type: "category",
      data: ["July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    },
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        data: [820, 932, 1100, 990, 1290, 1330, 1320],
        type: "line",
        smooth: false,
      },
    ],
  };
  return (
    <div className={`${css.LineChartcontainer} themeContainer`}>
      <span className={css.title}>Last 6 months Sales Performance</span>
      <ReactECharts option={option} />
    </div>
  );
};

export default LineChart;
