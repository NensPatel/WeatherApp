import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeatherApp from "./components/WeatherApp";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weatherApp" element={<WeatherApp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
