import React from "react";
import PropTypes from "prop-types";
import InvoicesFormItem from "./InvoicesFormItem";
import Loader from "./Loader";

export default function NewInvoiceForm({ handleSubRouteChange }) {
  const handleNewInvoice = (e) => {
    e.preventDefault();
    console.log(e.name);
    handleSubRouteChange("list");
  };
  return (
    <div className="content">
      <form onSubmit={(e) => handleNewInvoice(e)}>
        <div className="invoices-title-container">
          <div className="invoices-title">Invoices</div>
          <button type="submit" className="invoices-new-btn">
            Save Invoice
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <InvoicesFormItem item={{ name: "model S", price: "100" }} />
            <InvoicesFormItem
              item={{ name: "model dsfshjdfbhjsbdfhbhjh S", price: "100" }}
            />
          </tbody>
        </table>
      </form>
    </div>
  );
}

NewInvoiceForm.propTypes = {
  handleSubRouteChange: PropTypes.func.isRequired,
};
