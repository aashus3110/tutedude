import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Work from "./components/Work/Work";
import Terms from "./components/Terms/Terms";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Dashboard />
        <Work />
        <Terms />
      </HashRouter>
    </>
  );
};

export default App;
