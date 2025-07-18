import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const StatisticsChart = () => {
  const option = {
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(0,0,0,0.59)",
      borderWidth: 0,
    },
    xAxis: [
      {
        type: "category",
        boundryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
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
        type: "line",
        smooth: true,
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255,191,0)",
            },
            {
              offset: 1,
              color: "#F450D3",
            },
          ]),
          width: 3,
        },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: "#FE4C00",
            },
            {
              offset: 1,
              color: "rgb(255,144,70,0.1)",
            },
          ]),
        },
        data: [28000, 19000, 30000, 18000, 32000, 27000, 25000],
      },
    ],
  };
  return <ReactECharts option={option} />;
};

export default StatisticsChart;
