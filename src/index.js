import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import "./styles.css";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
