import React from "react";
import ChartBart from "./ChartBar";
import "./Chart.css";

function Chart(props) {
    const dataPointsValus= props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaximum=Math.max(...dataPointsValus)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBart
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={totalMaximum}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
}

export default Chart;
