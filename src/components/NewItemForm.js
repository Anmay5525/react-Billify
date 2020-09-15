import React from "react";
import PropTypes from "prop-types";

export default function NewItemForm({ handleSubRouteChange }) {
  const handleNewItem = (e) => {
    e.preventDefault();

    const url = "https://rzp-training.herokuapp.com/team1/items";

    const data = {
      name: e.target.name.value,
      amount: e.target.amount.value * 100,
      description: e.target.description.value,
      currency: "INR",
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return alert(
          `Something went wrong. Server responded with status ${res.status}`
        );
      })
      .then((r) => {
        if (r) {
          alert("New item created");
          handleSubRouteChange("list");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="content">
      <form className="items-form" onSubmit={(e) => handleNewItem(e)}>
        <div className="input-cnt">
          <div>Name</div>
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Enter name of item"
            required
            maxLength="40"
          />
        </div>

        <div className="input-cnt">
          <div>Amount</div>
          <input
            className="input"
            type="text"
            pattern="^[0-9]+"
            name="amount"
            placeholder="Enter amount"
            required
            onInput={(e) => {
              if (e.target.validity.patternMismatch) {
                e.target.setCustomValidity("Enter a valid amount!");
              } else {
                e.target.setCustomValidity("");
              }
            }}
          />
        </div>

        <div className="input-cnt">
          <div>Description</div>
          <textarea
            className="textarea"
            name="description"
            placeholder="Add description"
            rows="4"
          />
        </div>
        <div>
          <button type="submit" className="items-add-btn">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

NewItemForm.propTypes = {
  handleSubRouteChange: PropTypes.func.isRequired,
};
