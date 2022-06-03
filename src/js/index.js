//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/custom.css";
//import your own components
import Home from "./component/home.jsx";
//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
