import React from "react";
import PropTypes from "prop-types";
import CustomersList from "./CustomersList";
import ItemsList from "./ItemsList";
import InvoicesList from "./InvoicesList";
import NewCustomerForm from "./NewCustomerForm";
import NewItemForm from "./NewItemForm";
import NewInvoiceForm from "./NewInvoiceForm";

const RightPanel = ({ route, subRoute, handleSubRouteChange }) => {
  if (route === "Customers") {
    if (subRoute === "list") {
      return (
        <div className="right-panel">
          <CustomersList handleSubRouteChange={handleSubRouteChange} />
        </div>
      );
    }
    return (
      <div className="right-panel">
        <NewCustomerForm handleSubRouteChange={handleSubRouteChange} />
      </div>
    );
  }
  if (route === "Items") {
    if (subRoute === "list") {
      return (
        <div className="right-panel">
          <ItemsList handleSubRouteChange={handleSubRouteChange} />
        </div>
      );
    }
    return (
      <div className="right-panel">
        <NewItemForm handleSubRouteChange={handleSubRouteChange} />
      </div>
    );
  }
  if (route === "Invoices") {
    if (subRoute === "list") {
      return (
        <div className="right-panel">
          <InvoicesList handleSubRouteChange={handleSubRouteChange} />
        </div>
      );
    }
    return (
      <div className="right-panel">
        <NewInvoiceForm handleSubRouteChange={handleSubRouteChange} />
      </div>
    );
  }
  return <div>Invalid state</div>;
};

RightPanel.propTypes = {
  route: PropTypes.string.isRequired,
  subRoute: PropTypes.string.isRequired,
  handleSubRouteChange: PropTypes.func.isRequired,
};

export default RightPanel;
