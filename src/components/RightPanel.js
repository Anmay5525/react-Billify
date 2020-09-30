import React from "react";
import { Switch, Route } from "react-router-dom";
import CustomersList from "./CustomersList";
import ItemsList from "./ItemsList";
import InvoicesList from "./InvoicesList";
import NewCustomerForm from "./NewCustomerForm";
import NewItemForm from "./NewItemForm";
import NewInvoiceForm from "./NewInvoiceForm";

const RightPanel = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div className="right-panel" />
      </Route>
      <Route exact path="/Customers">
        <div className="right-panel">
          <CustomersList />
        </div>
      </Route>
      <Route path="/Customers/New">
        <div className="right-panel">
          <NewCustomerForm />
        </div>
      </Route>

      <Route exact path="/Items">
        <div className="right-panel">
          <ItemsList />
        </div>
      </Route>
      <Route path="/Items/New">
        <div className="right-panel">
          <NewItemForm />
        </div>
      </Route>

      <Route exact path="/Invoices">
        <div className="right-panel">
          <InvoicesList />
        </div>
      </Route>
      <Route path="/Invoices/New">
        <div className="right-panel">
          <NewInvoiceForm />
        </div>
      </Route>
    </Switch>
  );
};

export default RightPanel;
