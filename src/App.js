"use strict";

const e = React.createElement;

import LeftPanel from "./LeftPanel.js";
import RightPanel from "./RightPanel.js";
const { useState } = React;

const App = () => {
  const [route, setRoute] = useState("Customers");
  const [subRoute, setSubRoute] = useState("list");

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

let domContainer = document.querySelector("#root");
ReactDOM.render(<App />, domContainer);
