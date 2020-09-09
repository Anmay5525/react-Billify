var LeftPanel = function LeftPanel(_ref) {
  var route = _ref.route,
      handleRouteChange = _ref.handleRouteChange;

  return React.createElement(
    "div",
    { "class": "left-panel" },
    React.createElement(
      "div",
      {
        "class": "btn " + (route === "Customers" ? "active" : ""),
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
        "class": "btn " + (route === "Items" ? "active" : ""),
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
        "class": "btn " + (route === "Invoices" ? "active" : ""),
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