import React from "react";
import PropTypes from "prop-types";
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
  // if (route === "Customers") {
  /* if (subRoute === "list") {
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
  ); */
  // }
  // if (route === "Items") {
  //   if (subRoute === "list") {
  //     return (
  //       <div className="right-panel">
  //         <ItemsList handleSubRouteChange={handleSubRouteChange} />
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className="right-panel">
  //       <NewItemForm handleSubRouteChange={handleSubRouteChange} />
  //     </div>
  //   );
  // }
  // if (route === "Invoices") {
  //   if (subRoute === "list") {
  //     return (
  //       <div className="right-panel">
  //         <InvoicesList handleSubRouteChange={handleSubRouteChange} />
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className="right-panel">
  //       <NewInvoiceForm handleSubRouteChange={handleSubRouteChange} />
  //     </div>
  //   );
  // }
  // return <div>Invalid state</div>;
};

// RightPanel.propTypes = {
// route: PropTypes.string.isRequired,
// subRoute: PropTypes.string.isRequired,
// handleSubRouteChange: PropTypes.func.isRequired,
// };

export default RightPanel;
