const LeftPanel = ({ route, handleRouteChange }) => {
  return (
    <div class="left-panel">
      <div
        class={`btn ${route === "Customers" ? "active" : ""}`}
        id="Customers"
        onClick={() => handleRouteChange("Customers")}
      >
        Customers
      </div>

      <div
        class={`btn ${route === "Items" ? "active" : ""}`}
        id="Items"
        onClick={() => handleRouteChange("Items")}
      >
        Items
      </div>
      <div
        class={`btn ${route === "Invoices" ? "active" : ""}`}
        id="Invoices"
        onClick={() => handleRouteChange("Invoices")}
      >
        Invoices
      </div>
    </div>
  );
};

export default LeftPanel;
