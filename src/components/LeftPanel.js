import React from "react";
import { Link, useLocation } from "react-router-dom";

const LeftPanel = () => {
  const location = useLocation();
  const activeBtn = location.pathname.split("/")[1];
  return (
    <div className="left-panel">
      <Link to="/Customers">
        <button
          type="button"
          className={`btn ${activeBtn === "Customers" ? "active" : ""}`}
          id="Customers"
        >
          {/* change to see if CI stops if test fails */}
          Customers
        </button>
      </Link>
      <Link to="/Items">
        <button
          type="button"
          className={`btn ${activeBtn === "Items" ? "active" : ""}`}
          id="Items"
        >
          Items
        </button>
      </Link>
      <Link to="/Invoices">
        <button
          type="button"
          className={`btn ${activeBtn === "Invoices" ? "active" : ""}`}
          id="Invoices"
        >
          Invoices
        </button>
      </Link>
    </div>
  );
};

export default LeftPanel;
