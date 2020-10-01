import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "../css/App.css";

// Dummy change to test CI

const App = () => {
  return (
    <Router>
      <div className="container">
        <ToastContainer />

        <LeftPanel />

        <RightPanel />
      </div>
    </Router>
  );
};

export default App;
