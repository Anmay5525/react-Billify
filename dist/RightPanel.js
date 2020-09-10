import CustomersList from "./CustomersList.js";
import ItemsList from "./ItemsList.js";
import InvoicesList from "./InvoicesList.js";

var RightPanel = function RightPanel(_ref) {
  var route = _ref.route;

  if (route === "Customers") {
    return React.createElement(
      "div",
      { "class": "right-panel" },
      React.createElement(
        "div",
        { "class": "content", id: "Customers" },
        React.createElement(CustomersList, null)
      )
    );
  } else if (route === "Items") {
    return React.createElement(
      "div",
      { "class": "right-panel" },
      React.createElement(
        "div",
        { "class": "content", id: "Items" },
        React.createElement(ItemsList, null)
      )
    );
  } else {
    return React.createElement(
      "div",
      { "class": "right-panel" },
      React.createElement(
        "div",
        { "class": "content", id: "Invoices" },
        React.createElement(InvoicesList, null)
      )
    );
  }
};

export default RightPanel;