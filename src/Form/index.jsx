import React, { useState } from "react";
import Results from "../Results";

const Form = () => {
  //hook to set initial state
  const [income, setIncome] = useState(0);
  const Thirty = (income / 3).toFixed(2);

  const CleanInput = input => {
    const Cleaned = input.replace(/[^0-9.]/g, "");
    const Rounded = parseFloat(Cleaned).toFixed(2);
    return Rounded;
  };

  return (
    <div style={{}}>
      <form>
        <label>
          <h2>Net Income</h2>
          <input
            name="income"
            onChange={e => setIncome(CleanInput(e.target.value))}
            placeholder="Enter Net Income"
            style={{
              marginBottom: "3vh"
            }}
          />
        </label>
      </form>
      {income > 0 && <Results income={income} Thirty={Thirty} />}
    </div>
  );
};

export default Form;
