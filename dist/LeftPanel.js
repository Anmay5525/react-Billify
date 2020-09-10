var LeftPanel = function LeftPanel(_ref) {
  var route = _ref.route,
      handleRouteChange = _ref.handleRouteChange;

  return React.createElement(
    "div",
    { className: "left-panel" },
    React.createElement(
      "div",
      {
        className: "btn " + (route === "Customers" ? "active" : ""),
        id: "Customers",
        onClick: function onClick() {
          return handleRouteChange("Customers");
        }
      },
      "Customers"
    ),
    React.createElement(
      "div",
      {
        className: "btn " + (route === "Items" ? "active" : ""),
        id: "Items",
        onClick: function onClick() {
          return handleRouteChange("Items");
        }
      },
      "Items"
    ),
    React.createElement(
      "div",
      {
        className: "btn " + (route === "Invoices" ? "active" : ""),
        id: "Invoices",
        onClick: function onClick() {
          return handleRouteChange("Invoices");
        }
      },
      "Invoices"
    )
  );
};

export default LeftPanel;