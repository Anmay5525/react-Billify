import React from "react";
import PropTypes from "prop-types";

const LeftPanel = ({ route, handleRouteChange }) => {
  return (
    <div className="left-panel">
      <button
        type="button"
        className={`btn ${route === "Customers" ? "active" : ""}`}
        id="Customers"
        onClick={() => handleRouteChange("Customers")}
      >
        Customers
      </button>

      <button
        type="button"
        className={`btn ${route === "Items" ? "active" : ""}`}
        id="Items"
        onClick={() => handleRouteChange("Items")}
      >
        Items
      </button>
      <button
        type="button"
        className={`btn ${route === "Invoices" ? "active" : ""}`}
        id="Invoices"
        onClick={() => handleRouteChange("Invoices")}
      >
        Invoices
      </button>
    </div>
  );
};

LeftPanel.propTypes = {
  route: PropTypes.string.isRequired,
  handleRouteChange: PropTypes.func.isRequired,
};

export default LeftPanel;
