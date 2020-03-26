import React, { useState } from "react";

const Form = () => {
  //hook to set initial state
  const [income, setIncome] = useState(0);
  const OneThird = (income / 3).toFixed(2);

  return (
    <div style={{}}>
      <form>
        <label>
          <h2>Net Income</h2>
          <input
            name="income"
            value={income}
            onChange={e => setIncome(e.target.value)}
            placeholder="Enter Net Income"
            style={{
              marginBottom: "3vh"
            }}
          />
        </label>
      </form>
      {income > 0 && (
        <div
          style={{
            textAlign: "left"
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
            <li>Housing: ${OneThird}</li>
            <li>Essentials: ${OneThird}</li>
            <li>Other: ${(income - OneThird * 2).toFixed(2)}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Form;
