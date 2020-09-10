import Table from "./Table.js";
import Loader from "./Loader.js";

const { useEffect, useState } = React;

const ItemsList = () => {
  const [items, setItems] = useState(null);

  const getItems = () => {
    fetch("https://rzp-training.herokuapp.com/team1/items")
      .then((res) => res.json())
      .then((r) => setItems(r))
      .catch((er) => console.log(er));
  };
  useEffect(getItems, []);
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
        <div class="items-title-container">
          <div class="items-title">Items</div>
          <button class="items-new-btn">+ New Item</button>
        </div>
        <Table fields={fields} data={data} />
      </div>
    );
  } else {
    return <Loader />;
  }
};
export default ItemsList;