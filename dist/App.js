"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var e = React.createElement;

import LeftPanel from "./LeftPanel.js";
import RightPanel from "./RightPanel.js";
var _React = React,
    useState = _React.useState;


var App = function App() {
  var _useState = useState("Customers"),
      _useState2 = _slicedToArray(_useState, 2),
      route = _useState2[0],
      setRoute = _useState2[1];

  var handleRouteChange = function handleRouteChange(r) {
    setRoute(r);
    // console.log(route);
  };

  return React.createElement(
    "div",
    { "class": "container" },
    React.createElement(LeftPanel, { route: route, handleRouteChange: handleRouteChange }),
    React.createElement(RightPanel, { route: route })
  );
};

var domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(App, null), domContainer);