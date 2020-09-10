import CustomersList from "./CustomersList.js";
import ItemsList from "./ItemsList.js";
import InvoicesList from "./InvoicesList.js";
import NewCustomerForm from "./NewCustomerForm.js";

var RightPanel = function RightPanel(_ref) {
  var route = _ref.route,
      subRoute = _ref.subRoute,
      handleSubRouteChange = _ref.handleSubRouteChange,
      handleNewCustomer = _ref.handleNewCustomer;

  if (route === "Customers") {
    if (subRoute === "list") {
      return React.createElement(
        "div",
        { className: "right-panel" },
        React.createElement(
          "div",
          { className: "content", id: "Customers" },
          React.createElement(CustomersList, { handleSubRouteChange: handleSubRouteChange })
        )
      );
    } else {
      return React.createElement(
        "div",
        { className: "right-panel" },
        React.createElement(
          "div",
          { className: "content", id: "Customers" },
          React.createElement(NewCustomerForm, { handleNewCustomer: handleNewCustomer })
        )
      );
    }
  } else if (route === "Items") {
    return React.createElement(
      "div",
      { className: "right-panel" },
      React.createElement(
        "div",
        { className: "content", id: "Items" },
        React.createElement(ItemsList, null)
      )
    );
  } else {
    return React.createElement(
      "div",
      { className: "right-panel" },
      React.createElement(
        "div",
        { className: "content", id: "Invoices" },
        React.createElement(InvoicesList, null)
      )
    );
  }
};

export default RightPanel;