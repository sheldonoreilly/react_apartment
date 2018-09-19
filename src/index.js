import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const rootElement = document.getElementById("root");

console.log("rootElement :", rootElement);
ReactDOM.render(<App />, rootElement);
