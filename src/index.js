import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reducer, { initialState } from './utils/reducer';
import { StateProvider } from './utils/StateProvider';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StateProvider initialState = {initialState} reducer = {reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
  