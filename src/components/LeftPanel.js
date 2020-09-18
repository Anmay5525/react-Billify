import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LeftPanel = ({ route, handleRouteChange }) => {
  return (
    <div className="left-panel">
      <Link to="/Customers">
        <button
          type="button"
          className={`btn ${route === "Customers" ? "active" : ""}`}
          id="Customers"
          onClick={() => handleRouteChange("Customers")}
        >
          Customers
        </button>
      </Link>
      <Link to="/Items">
        <button
          type="button"
          className={`btn ${route === "Items" ? "active" : ""}`}
          id="Items"
          onClick={() => handleRouteChange("Items")}
        >
          Items
        </button>
      </Link>
      <Link to="/Invoices">
        <button
          type="button"
          className={`btn ${route === "Invoices" ? "active" : ""}`}
          id="Invoices"
          onClick={() => handleRouteChange("Invoices")}
        >
          Invoices
        </button>
      </Link>
    </div>
  );
};

LeftPanel.propTypes = {
  route: PropTypes.string.isRequired,
  handleRouteChange: PropTypes.func.isRequired,
};

export default LeftPanel;
