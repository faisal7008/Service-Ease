import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Choice", "No of submissions"],
  ["Very dissatisfied", 11],
  ["Somewhat dissatisfied", 2],
  ["Somewhat satisfied", 2],
  ["Very dissatisfied", 2]
];

export const options = {
  title: "",
  pieHole: 0.5,
  is3D: false,
};

export default function SurveyChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="350px"
      style={{padding: "0px", backgroundColor: "transparent"}}
      data={data}
      options={options}
    />
  );
}