import React from "react";

const LeftPanel = ({ route, handleRouteChange }) => {
  return (
    <div className="left-panel">
      <button
        className={`btn ${route === "Customers" ? "active" : ""}`}
        id="Customers"
        onClick={() => handleRouteChange("Customers")}
      >
        Customers
      </button>

      <button
        className={`btn ${route === "Items" ? "active" : ""}`}
        id="Items"
        onClick={() => handleRouteChange("Items")}
      >
        Items
      </button>
      <button
        className={`btn ${route === "Invoices" ? "active" : ""}`}
        id="Invoices"
        onClick={() => handleRouteChange("Invoices")}
      >
        Invoices
      </button>
    </div>
  );
};

export default LeftPanel;
