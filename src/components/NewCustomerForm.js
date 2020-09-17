import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewCustomerForm({ handleSubRouteChange }) {
  const handleNewCustomer = (e) => {
    e.preventDefault();
    const url = "https://rzp-training.herokuapp.com/team1/customers";

    const name = e.target.name.value;
    const email = e.target.email.value;
    const contact = e.target.phone.value;

    const data = {
      name,
      email,
      contact,
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
        return toast.error(
          `Something went wrong. Server responded with status ${res.status}`
        );
      })
      .then((r) => {
        if (r) {
          toast.success("New customer created");
          handleSubRouteChange("list");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="content">
      <form className="customers-form" onSubmit={(e) => handleNewCustomer(e)}>
        <div className="input-cnt">
          <div>Name</div>
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Enter name of customer"
            required
            maxLength="25"
          />
        </div>

        <div className="input-cnt">
          <div>Email</div>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Enter email"
            required
            maxLength="30"
          />
        </div>

        <div className="input-cnt">
          <div>Phone No.</div>
          <input
            className="input"
            type="text"
            pattern="^[0-9]{10}$"
            name="phone"
            placeholder="Enter phone no."
            required
            onInput={(event) => {
              if (event.target.validity.patternMismatch) {
                event.target.setCustomValidity("Enter a valid phone number!");
              } else {
                event.target.setCustomValidity("");
              }
            }}
          />
        </div>
        <div>
          <button type="submit" className="customers-add-btn">
            Add Customer
          </button>
        </div>
      </form>
    </div>
  );
}

NewCustomerForm.propTypes = {
  handleSubRouteChange: PropTypes.func.isRequired,
};
