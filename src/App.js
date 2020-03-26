import React from "react";
import Form from "./Form";
import Header from "./Header";

function App() {
  return (
    <div
      className="App"
      style={{
        margin: "0 auto",
        width: "50vw",
        textAlign: "center"
      }}
    >
      <Header />
      <Form />
    </div>
  );
}

export default App;
