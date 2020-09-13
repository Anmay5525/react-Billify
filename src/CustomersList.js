import Table from "./Table.js";
import Loader from "./Loader.js";
import Filter from "./Filter.js";

const { useEffect, useState } = React;

const CustomersList = ({ handleSubRouteChange }) => {
  const [customers, setCustomers] = useState(null);
  const [filter, setFilter] = useState(false);
  const [filterString, setFilterString] = useState("");

  const controller = new AbortController();
  const signal = controller.signal;

  const handleFilterChange = (event) => {
    setFilterString(event.target.value);
  };

  const getCustomers = () => {
    fetch("https://rzp-training.herokuapp.com/team1/customers", { signal })
      .then((res) => res.json())
      .then((r) => setCustomers(r))
      .catch((er) => console.log(er));
  };

  useEffect(() => {
    getCustomers();
    return () => {
      controller.abort();
    };
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

    const filteredData = data.filter((element) => {
      return String(element.name)
        .toLowerCase()
        .includes(filterString.toLowerCase());
    });

    return (
      <div className="content">
        <div className="customers-title-container">
          <div className="customers-title">Customers</div>

          <button
            className="customers-new-btn"
            onClick={() => handleSubRouteChange("new")}
          >
            + New Customer
          </button>
        </div>
        <div>
          <div className="filter-container">
            {filter ? <Filter handleChange={handleFilterChange} /> : ""}
            {filter ? (
              ""
            ) : (
              <button className="filter-btn" onClick={() => setFilter(true)}>
                Filter
              </button>
            )}

            <button
              className="filter-btn"
              onClick={() => {
                setFilter(false);
                setFilterString("");
              }}
            >
              X
            </button>
          </div>
          <Table fields={fields} data={filteredData} />
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};
export default CustomersList;
