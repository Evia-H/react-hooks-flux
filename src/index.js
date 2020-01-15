import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import HomePage from "./components/HomePage";
import About from "./components/AboutPage";
import { render } from "react-dom";

render(<About />, document.getElementById("root"));
