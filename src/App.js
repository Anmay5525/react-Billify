"use strict";

const e = React.createElement;

import LeftPanel from "./LeftPanel.js";
import RightPanel from "./RightPanel.js";
const { useState } = React;

const App = () => {
  const [route, setRoute] = useState("Customers");

  const handleRouteChange = (r) => {
    setRoute(r);
    // console.log(route);
  };

  return (
    <div class="container">
      <LeftPanel route={route} handleRouteChange={handleRouteChange} />
      <RightPanel route={route} />
    </div>
  );
};

let domContainer = document.querySelector("#root");
ReactDOM.render(<App />, domContainer);
