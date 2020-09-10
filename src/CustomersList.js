import Table from "./Table.js";
import Loader from "./Loader.js";

const { useEffect, useState } = React;

const CustomersList = () => {
  const [customers, setCustomers] = useState(null);

  const getCustomers = () => {
    fetch("https://rzp-training.herokuapp.com/team1/customers")
      .then((res) => res.json())
      .then((r) => setCustomers(r))
      .catch((er) => console.log(er));
  };
  useEffect(getCustomers, []);
  const fields = ["name", "email", "contact", "created_at"];
  if (customers) {
    const data = customers.items.map((item) => {
      return {
        name: item.name,
        email: item.email,
        contact: item.contact,
        created_at: new Date(item.created_at * 1000).toDateString(),
      };
    });
    return (
      <div className="content">
        <div class="customers-title-container">
          <div class="customers-title">Customers</div>
          <button class="customers-new-btn">+ New Customer</button>
        </div>
        <Table fields={fields} data={data} />
      </div>
    );
  } else {
    return <Loader />;
  }
};
export default CustomersList;
