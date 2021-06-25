import React from "react";
import App from "./src/components/App";
import { render } from "react-dom";
require("dotenv").config({ path: __dirname + "/src/.env" });

render(<App />, document.getElementById("root"));
