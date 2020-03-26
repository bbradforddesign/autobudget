import React, { useState } from "react";

const Form = () => {
  //hook to set initial state
  const [income, setIncome] = useState("0");

  return (
    <div>
      <form>
        <input
          name="income"
          value={income}
          onChange={e => setIncome(e.target.value)}
          placeholder="Enter Net Income"
        />
      </form>
      <div
        style={{ backgroundColor: "red", width: income + "px", height: "10px" }}
      />
    </div>
  );
};

export default Form;
