import CustomersList from "./CustomersList.js";
import ItemsList from "./ItemsList.js";
import InvoicesList from "./InvoicesList.js";
import NewCustomerForm from "./NewCustomerForm.js";
import NewItemForm from "./NewItemForm.js";

const RightPanel = ({
  route,
  subRoute,
  handleSubRouteChange,
  handleNewCustomer,
  handleNewItem,
}) => {
  if (route === "Customers") {
    if (subRoute === "list") {
      return (
        <div className="right-panel">
          <div className="content" id="Customers">
            <CustomersList handleSubRouteChange={handleSubRouteChange} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="right-panel">
          <div className="content" id="Customers">
            <NewCustomerForm handleNewCustomer={handleNewCustomer} />
          </div>
        </div>
      );
    }
  } else if (route === "Items") {
    if (subRoute === "list") {
      return (
        <div className="right-panel">
          <div className="content" id="Items">
            <ItemsList handleSubRouteChange={handleSubRouteChange} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="right-panel">
          <div className="content" id="Items">
            <NewItemForm handleNewItem={handleNewItem} />
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="right-panel">
        <div className="content" id="Invoices">
          <InvoicesList />
        </div>
      </div>
    );
  }
};

export default RightPanel;
