import Table from "./Table.js";
import Loader from "./Loader.js";

const { useEffect, useState } = React;

const ItemsList = ({ handleSubRouteChange }) => {
  const [items, setItems] = useState(null);

  const controller = new AbortController();
  const signal = controller.signal;

  const getItems = () => {
    fetch("https://rzp-training.herokuapp.com/team1/items", { signal })
      .then((res) => res.json())
      .then((r) => setItems(r))
      .catch((er) => console.log(er));
  };
  useEffect(() => {
    getItems();
    return () => {
      controller.abort();
    };
  }, []);
  const fields = ["name", "description", "amount", "currency"];
  if (items) {
    const data = items.items.map((item) => {
      return {
        name: item.name,
        description: item.description,
        amount: item.amount / 100,
        currency: item.currency,
      };
    });

    return (
      <div className="content">
        <div className="items-title-container">
          <div className="items-title">Items</div>
          <button
            className="items-new-btn"
            onClick={() => handleSubRouteChange("new")}
          >
            + New Item
          </button>
        </div>
        <Table fields={fields} data={data} />
      </div>
    );
  } else {
    return <Loader />;
  }
};
export default ItemsList;
