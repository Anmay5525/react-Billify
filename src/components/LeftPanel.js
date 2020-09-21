import React from "react";
// import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const LeftPanel = () => {
  // const [route, setRoute] = useState("Customers");
  const location = useLocation();
  const activeBtn = location.pathname.split("/")[1];
  // const handleRouteChange = (r) => {
  //   setRoute(r);
  // };
  return (
    <div className="left-panel">
      <Link to="/Customers">
        <button
          type="button"
          className={`btn ${activeBtn === "Customers" ? "active" : ""}`}
          id="Customers"
          // onClick={() => handleRouteChange("Custmers")}
        >
          Customers
        </button>
      </Link>
      <Link to="/Items">
        <button
          type="button"
          className={`btn ${activeBtn === "Items" ? "active" : ""}`}
          id="Items"
          // onClick={() => handleRouteChange("Itms")}
        >
          Items
        </button>
      </Link>
      <Link to="/Invoices">
        <button
          type="button"
          className={`btn ${activeBtn === "Invoices" ? "active" : ""}`}
          id="Invoices"
          // onClick={() => handleRouteChange("Invoces")}
        >
          Invoices
        </button>
      </Link>
    </div>
  );
};

LeftPanel.propTypes = {
  // route: PropTypes.string.isRequired,
  // handleRouteChange: PropTypes.func.isRequired,
};

export default LeftPanel;
