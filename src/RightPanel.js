import CustomersList from "./CustomersList.js";
import ItemsList from "./ItemsList.js";
import InvoicesList from "./InvoicesList.js";
import NewCustomerForm from "./NewCustomerForm.js";

const RightPanel = ({
  route,
  subRoute,
  handleSubRouteChange,
  handleNewCustomer,
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
    return (
      <div className="right-panel">
        <div className="content" id="Items">
          <ItemsList />
        </div>
      </div>
    );
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
