import CustomersList from "./CustomersList.js";
import ItemsList from "./ItemsList.js";
import InvoicesList from "./InvoicesList.js";

const RightPanel = ({ route }) => {
  if (route === "Customers") {
    return (
      <div class="right-panel">
        <div class="content" id="Customers">
          <CustomersList />
        </div>
      </div>
    );
  } else if (route === "Items") {
    return (
      <div class="right-panel">
        <div class="content" id="Items">
          <ItemsList />
        </div>
      </div>
    );
  } else {
    return (
      <div class="right-panel">
        <div class="content" id="Invoices">
          <InvoicesList />
        </div>
      </div>
    );
  }
};

export default RightPanel;
