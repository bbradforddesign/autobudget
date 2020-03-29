import React from "react";

//displays amount of each expense in a one-dimensional bar chart
const Chart = props => {
  const Income = props.income;
  const Housing = props.housing;
  const Essentials = props.essentials;
  const Other = props.other;

  //calculate percentage of bar a given div takes
  const ConvertPercentage = (x, y) => {
    return (x / y) * 100;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "10px"
      }}
    >
      <div
        style={{
          flexGrow: ConvertPercentage(Housing, Income),
          height: "10px",
          backgroundColor: "red"
        }}
      />
      <div
        style={{
          flexGrow: ConvertPercentage(Essentials, Income),
          height: "10px",
          backgroundColor: "purple"
        }}
      />
      <div
        style={{
          flexGrow: ConvertPercentage(Other, Income),
          height: "10px",
          backgroundColor: "blue"
        }}
      />
    </div>
  );
};

export default Chart;
