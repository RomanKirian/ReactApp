import React from "react";
import { render } from "react-dom";
import App from "./component/App";

import "./styles.css";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
