import React from "react";

const Results = props => {
  const AddCommas = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const income = AddCommas(props.income);
  const Thirty = AddCommas(props.Thirty);
  const Remainder = AddCommas((props.income - props.Thirty * 2).toFixed(2));

  const ListItemStyle = {
    marginBottom: "2%",
    display: "flex"
  };

  return (
    <div
      style={{
        textAlign: "left",
        padding: "2%",
        backgroundColor: "#EEE"
      }}
    >
      <ul
        style={{
          listStyle: "none"
        }}
      >
        <li style={ListItemStyle}>
          <h3>Total: ${income}</h3>
        </li>
        <li style={ListItemStyle}>Housing: ${Thirty}</li>
        <li style={ListItemStyle}>Essentials: ${Thirty}</li>
        <li style={ListItemStyle}>Other: ${Remainder}</li>
      </ul>
    </div>
  );
};

export default Results;
