import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "../css/App.css";

const App = () => {
  const [route, setRoute] = useState("");
  const [subRoute, setSubRoute] = useState("list");

  const handleRouteChange = (r) => {
    setRoute(r);
    setSubRoute("list");
  };

  const handleSubRouteChange = (str) => {
    setSubRoute(str);
  };

  return (
    <Router>
      <div className="container">
        <ToastContainer />

        <LeftPanel route={route} handleRouteChange={handleRouteChange} />

        <RightPanel
          route={route}
          subRoute={subRoute}
          handleSubRouteChange={handleSubRouteChange}
        />
      </div>
    </Router>
  );
};

export default App;
