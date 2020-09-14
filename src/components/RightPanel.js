import React from "react";
import CustomersList from "./CustomersList";
import ItemsList from "./ItemsList";
import InvoicesList from "./InvoicesList";
import NewCustomerForm from "./NewCustomerForm";
import NewItemForm from "./NewItemForm";

const RightPanel = ({ route, subRoute, handleSubRouteChange }) => {
  if (route === "Customers") {
    if (subRoute === "list") {
      return (
        <div className="right-panel">
          <div className="content" id="Customers">
            <CustomersList handleSubRouteChange={handleSubRouteChange} />
          </div>
        </div>
      );
    }
    return (
      <div className="right-panel">
        <div className="content" id="Customers">
          <NewCustomerForm handleSubRouteChange={handleSubRouteChange} />
        </div>
      </div>
    );
  }
  if (route === "Items") {
    if (subRoute === "list") {
      return (
        <div className="right-panel">
          <div className="content" id="Items">
            <ItemsList handleSubRouteChange={handleSubRouteChange} />
          </div>
        </div>
      );
    }
    return (
      <div className="right-panel">
        <div className="content" id="Items">
          <NewItemForm handleSubRouteChange={handleSubRouteChange} />
        </div>
      </div>
    );
  }
  if (route === "Invoices") {
    if (subRoute === "list") {
      return (
        <div className="right-panel">
          <div className="content" id="Invoices">
            <InvoicesList />
          </div>
        </div>
      );
    }
    return <div>Add Invoice</div>;
  }
  return "";
};

export default RightPanel;
