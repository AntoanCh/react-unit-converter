import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Weight from "./routes/weight";
import Length from "./routes/length";
import Temperature from "./routes/temperature";
import Volume from "./routes/volume";
import Area from "./routes/area";
import Speed from "./routes/speed";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="weight" element={<Weight />} />
          <Route path="length" element={<Length />} />
          <Route path="temperature" element={<Temperature />} />
          <Route path="area" element={<Area />} />
          <Route path="volume" element={<Volume />} />
          <Route path="speed" element={<Speed />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
