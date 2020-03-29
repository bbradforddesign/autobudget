import React from "react";
import Chart from "../Chart";

const Results = (props, { show = true }) => {
  //Add commas every third zero
  const AddCommas = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  //Store props into variables for rendering
  const income = AddCommas(props.income);
  const Thirty = AddCommas(props.Thirty);
  const Remainder = AddCommas((props.income - props.Thirty * 2).toFixed(2));

  return show ? (
    <div
      style={{
        textAlign: "left",
        padding: "2%",
        backgroundColor: "#EEE",
        animation: `fadeIn 300ms`
      }}
    >
      <ul
        style={{
          listStyle: "none"
        }}
      >
        <li>
          <h3>Total: ${income}</h3>
        </li>
        <li style={{ color: "red" }}>Housing: ${Thirty}</li>
        <li style={{ color: "purple" }}>Essentials: ${Thirty}</li>
        <li style={{ color: "blue" }}>Other: ${Remainder}</li>
      </ul>
      <Chart
        income={income}
        housing={Thirty}
        essentials={Thirty}
        other={Remainder}
      />
    </div>
  ) : null;
};

export default Results;
