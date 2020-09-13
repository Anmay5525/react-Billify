var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Table from "./Table.js";
import Loader from "./Loader.js";

var _React = React,
    useEffect = _React.useEffect,
    useState = _React.useState;


var InvoicesList = function InvoicesList() {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      invoices = _useState2[0],
      setInvoices = _useState2[1];

  var controller = new AbortController();
  var signal = controller.signal;

  var getInvoices = function getInvoices() {
    fetch("https://rzp-training.herokuapp.com/team1/invoices", { signal: signal }).then(function (res) {
      return res.json();
    }).then(function (r) {
      return setInvoices(r);
    }).catch(function (er) {
      return console.log(er);
    });
  };
  useEffect(function () {
    getInvoices();
    return function () {
      controller.abort();
    };
  }, []);
  var fields = ["date", "customer", "status", "amount", "amount_due"];
  if (invoices) {
    var data = invoices.items.map(function (item) {
      return {
        date: new Date(item.date * 1000).toDateString(),
        customer: item.customer_details.name,
        status: item.status.toUpperCase(),
        amount: item.amount / 100,
        amount_due: item.amount_due / 100
      };
    });
    return React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "div",
        { className: "invoices-title-container" },
        React.createElement(
          "div",
          { className: "invoices-title" },
          "Invoices"
        ),
        React.createElement(
          "button",
          { className: "invoices-new-btn" },
          "+ New Invoice"
        )
      ),
      React.createElement(Table, { fields: fields, data: data })
    );
  } else {
    return React.createElement(Loader, null);
  }
};
export default InvoicesList;