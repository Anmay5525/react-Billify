import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import Loader from "./Loader";

const ItemsList = ({ handleSubRouteChange }) => {
  const [items, setItems] = useState(null);

  const controller = new AbortController();
  const { signal } = controller;

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
            type="button"
            className="items-new-btn"
            onClick={() => handleSubRouteChange("new")}
          >
            + New Item
          </button>
        </div>
        <Table fields={fields} data={data} />
      </div>
    );
  }
  return <Loader />;
};

ItemsList.propTypes = {
  handleSubRouteChange: PropTypes.func.isRequired,
};

export default ItemsList;
