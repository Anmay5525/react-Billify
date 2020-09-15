import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "../css/App.css";

const App = () => {
  const [route, setRoute] = useState("Invoices");
  const [subRoute, setSubRoute] = useState("new");

  const handleRouteChange = (r) => {
    setRoute(r);
    setSubRoute("list");
  };

  const handleSubRouteChange = (str) => {
    setSubRoute(str);
  };

  return (
    <div className="container">
      <LeftPanel route={route} handleRouteChange={handleRouteChange} />
      <RightPanel
        route={route}
        subRoute={subRoute}
        handleSubRouteChange={handleSubRouteChange}
      />
    </div>
  );
};

export default App;
