var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Table from "./Table.js";
import Loader from "./Loader.js";
import Filter from "./Filter.js";

var _React = React,
    useEffect = _React.useEffect,
    useState = _React.useState;


var CustomersList = function CustomersList(_ref) {
  var handleSubRouteChange = _ref.handleSubRouteChange;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      customers = _useState2[0],
      setCustomers = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1];

  var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      filterString = _useState6[0],
      setFilterString = _useState6[1];

  var controller = new AbortController();
  var signal = controller.signal;

  var handleFilterChange = function handleFilterChange(event) {
    setFilterString(event.target.value);
  };

  var getCustomers = function getCustomers() {
    fetch("https://rzp-training.herokuapp.com/team1/customers", { signal: signal }).then(function (res) {
      return res.json();
    }).then(function (r) {
      return setCustomers(r);
    }).catch(function (er) {
      return console.log(er);
    });
  };

  useEffect(function () {
    getCustomers();
    return function () {
      controller.abort();
    };
  }, []);

  var fields = ["name", "email", "contact", "created_at"];

  if (customers) {
    var data = customers.items.map(function (item) {
      return {
        name: item.name,
        email: item.email,
        contact: item.contact,
        created_at: new Date(item.created_at * 1000).toDateString()
      };
    });

    var filteredData = data.filter(function (element) {
      return String(element.name).toLowerCase().includes(filterString.toLowerCase());
    });

    return React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "div",
        { className: "customers-title-container" },
        React.createElement(
          "div",
          { className: "customers-title" },
          "Customers"
        ),
        React.createElement(
          "button",
          {
            className: "customers-new-btn",
            onClick: function onClick() {
              return handleSubRouteChange("new");
            }
          },
          "+ New Customer"
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "filter-container" },
          filter ? React.createElement(Filter, { handleChange: handleFilterChange }) : "",
          filter ? "" : React.createElement(
            "button",
            { className: "filter-btn", onClick: function onClick() {
                return setFilter(true);
              } },
            "Filter"
          ),
          React.createElement(
            "button",
            {
              className: "filter-btn",
              onClick: function onClick() {
                setFilter(false);
                setFilterString("");
              }
            },
            "X"
          )
        ),
        React.createElement(Table, { fields: fields, data: filteredData })
      )
    );
  } else {
    return React.createElement(Loader, null);
  }
};
export default CustomersList;