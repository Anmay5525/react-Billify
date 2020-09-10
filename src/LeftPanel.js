const LeftPanel = ({ route, handleRouteChange }) => {
  return (
    <div className="left-panel">
      <div
        className={`btn ${route === "Customers" ? "active" : ""}`}
        id="Customers"
        onClick={() => handleRouteChange("Customers")}
      >
        Customers
      </div>

      <div
        className={`btn ${route === "Items" ? "active" : ""}`}
        id="Items"
        onClick={() => handleRouteChange("Items")}
      >
        Items
      </div>
      <div
        className={`btn ${route === "Invoices" ? "active" : ""}`}
        id="Invoices"
        onClick={() => handleRouteChange("Invoices")}
      >
        Invoices
      </div>
    </div>
  );
};

export default LeftPanel;
