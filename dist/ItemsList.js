var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Table from "./Table.js";
import Loader from "./Loader.js";

var _React = React,
    useEffect = _React.useEffect,
    useState = _React.useState;


var ItemsList = function ItemsList(_ref) {
  var handleSubRouteChange = _ref.handleSubRouteChange;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var getItems = function getItems() {
    fetch("https://rzp-training.herokuapp.com/team1/items").then(function (res) {
      return res.json();
    }).then(function (r) {
      return setItems(r);
    }).catch(function (er) {
      return console.log(er);
    });
  };
  useEffect(getItems, []);
  var fields = ["name", "description", "amount", "currency"];
  if (items) {
    var data = items.items.map(function (item) {
      return {
        name: item.name,
        description: item.description,
        amount: item.amount / 100,
        currency: item.currency
      };
    });

    return React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "div",
        { className: "items-title-container" },
        React.createElement(
          "div",
          { className: "items-title" },
          "Items"
        ),
        React.createElement(
          "button",
          { className: "items-new-btn", onClick: handleSubRouteChange },
          "+ New Item"
        )
      ),
      React.createElement(Table, { fields: fields, data: data })
    );
  } else {
    return React.createElement(Loader, null);
  }
};
export default ItemsList;