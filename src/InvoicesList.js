import Table from "./Table.js";
import Loader from "./Loader.js";

const { useEffect, useState } = React;

const InvoicesList = () => {
  const [invoices, setInvoices] = useState(null);

  const getInvoices = () => {
    fetch("https://rzp-training.herokuapp.com/team1/invoices")
      .then((res) => res.json())
      .then((r) => setInvoices(r))
      .catch((er) => console.log(er));
  };
  useEffect(getInvoices, []);
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
          <button className="invoices-new-btn">+ New Invoice</button>
        </div>
        <Table fields={fields} data={data} />
      </div>
    );
  } else {
    return <Loader />;
  }
};
export default InvoicesList;
