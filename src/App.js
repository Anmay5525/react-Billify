"use strict";

const e = React.createElement;

import LeftPanel from "./LeftPanel.js";
import RightPanel from "./RightPanel.js";
const { useState } = React;

const App = () => {
  const [route, setRoute] = useState("Customers");
  const [subRoute, setSubRoute] = useState("list");

  const handleRouteChange = (r) => {
    setRoute(r);
    setSubRoute("list");
  };

  const handleSubRouteChange = () => {
    setSubRoute("new");
  };

  const handleNewCustomer = (name, email, phone) => {
    const url = "https://rzp-training.herokuapp.com/team1/customers";

    const data = {
      name: name,
      email: email,
      contact: phone,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((r) => setSubRoute("list"))
      .catch((error) => console.log(error));
  };

  const handleNewItem = (name, amount, description) => {
    const url = "https://rzp-training.herokuapp.com/team1/items";

    const data = {
      name: name,
      amount: amount,
      description: description,
      currency: "INR",
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((r) => setSubRoute("list"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <LeftPanel route={route} handleRouteChange={handleRouteChange} />
      <RightPanel
        route={route}
        subRoute={subRoute}
        handleSubRouteChange={handleSubRouteChange}
        handleNewCustomer={handleNewCustomer}
        handleNewItem={handleNewItem}
      />
    </div>
  );
};

let domContainer = document.querySelector("#root");
ReactDOM.render(<App />, domContainer);
