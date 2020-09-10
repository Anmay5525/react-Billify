import Table from "./Table.js";
import Loader from "./Loader.js";

const { useEffect, useState } = React;

const CustomersList = ({ handleSubRouteChange }) => {
  const [customers, setCustomers] = useState(null);

  const getCustomers = () => {
    fetch("https://rzp-training.herokuapp.com/team1/customers")
      .then((res) => res.json())
      .then((r) => setCustomers(r))
      .catch((er) => console.log(er));
  };
  useEffect(() => {
    getCustomers();
    return () => console.log("unmounted");
  }, []);
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
        <div className="customers-title-container">
          <div className="customers-title">Customers</div>
          <button className="customers-new-btn" onClick={handleSubRouteChange}>
            + New Customer
          </button>
        </div>
        <Table fields={fields} data={data} />
      </div>
    );
  } else {
    return <Loader />;
  }
};
export default CustomersList;
