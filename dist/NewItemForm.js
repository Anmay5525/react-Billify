var _React = React,
    useRef = _React.useRef;


export default function NewItemForm(_ref) {
  var handleSubRouteChange = _ref.handleSubRouteChange;

  var name = useRef();
  var amount = useRef();
  var description = useRef();

  var handleNewItem = function handleNewItem(e, name, amount, description) {
    e.preventDefault();

    var url = "https://rzp-training.herokuapp.com/team1/items";

    var data = {
      name: name,
      amount: amount,
      description: description,
      currency: "INR"
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        alert("Something went wrong. Server responded with status " + res.status);
      }
    }).then(function (r) {
      if (r) {
        alert("New item created");
        handleSubRouteChange("list");
      }
    }).catch(function (error) {
      return console.log(error);
    });
  };

  return React.createElement(
    "form",
    {
      className: "items-form",
      onSubmit: function onSubmit(e) {
        return handleNewItem(e, name.current.value, amount.current.value, description.current.value);
      }
    },
    React.createElement(
      "div",
      { className: "input-cnt" },
      React.createElement(
        "div",
        null,
        "Name"
      ),
      React.createElement("input", {
        ref: name,
        className: "input",
        id: "name",
        type: "text",
        placeholder: "Enter name of item"
      })
    ),
    React.createElement(
      "div",
      { className: "input-cnt" },
      React.createElement(
        "div",
        null,
        "Amount"
      ),
      React.createElement("input", {
        ref: amount,
        className: "input",
        type: "number",
        id: "amount",
        placeholder: "Enter amount"
      })
    ),
    React.createElement(
      "div",
      { className: "input-cnt" },
      React.createElement(
        "div",
        null,
        "Description"
      ),
      React.createElement("textarea", {
        ref: description,
        className: "textarea",
        id: "description",
        placeholder: "Add description",
        rows: "4"
      })
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { className: "items-add-btn" },
        "Add Item"
      )
    )
  );
}