import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Table from "./Table";
import Loader from "./Loader";

const InvoicesList = ({ handleSubRouteChange }) => {
  const [invoices, setInvoices] = useState(null);

  const controller = new AbortController();
  const { signal } = controller;

  const getInvoices = () => {
    fetch("https://rzp-training.herokuapp.com/team1/invoices", { signal })
      .then((res) => res.json())
      .then((r) => setInvoices(r))
      .catch((er) => console.log(er));
  };
  useEffect(() => {
    getInvoices();
    return () => {
      controller.abort();
    };
  }, []);
  const fields = ["date", "customer", "status", "amount", "amount_due"];
  if (invoices) {
    const data = invoices.items.map((item) => {
      return {
        date: new Date(item.date * 1000).toDateString(),
        customer: item.customer_details.name,
        status: item.status.toUpperCase(),
        amount: item.amount / 100,
        amount_due: item.amount_due / 100,
      };
    });
    return (
      <div className="content">
        <div className="invoices-title-container">
          <div className="invoices-title">Invoices</div>
          <Link to="/Invoices/New">
            <button
              type="button"
              className="invoices-new-btn"
              onClick={() => handleSubRouteChange("new")}
            >
              + New Invoice
            </button>
          </Link>
        </div>
        <Table fields={fields} data={data} />
      </div>
    );
  }
  return <Loader />;
};

InvoicesList.propTypes = {
  handleSubRouteChange: PropTypes.func.isRequired,
};

export default InvoicesList;
