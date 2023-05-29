import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "normalize.css";
const root = createRoot(document.getElementById("root"));
root.render(
	//严格模式
	<App />
);
