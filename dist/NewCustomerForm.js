var _React = React,
    useRef = _React.useRef;


export default function NewCustomerForm(_ref) {
  var handleSubRouteChange = _ref.handleSubRouteChange;

  var name = useRef();
  var email = useRef();
  var phone = useRef();

  var handleNewCustomer = function handleNewCustomer(e, name, email, phone) {
    e.preventDefault();
    var url = "https://rzp-training.herokuapp.com/team1/customers";

    var data = {
      name: name,
      email: email,
      contact: phone
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
        alert("New customer created");
        handleSubRouteChange("list");
      }
    }).catch(function (error) {
      return console.log(error);
    });
  };

  return React.createElement(
    "form",
    {
      className: "customers-form",
      onSubmit: function onSubmit(e) {
        return handleNewCustomer(e, name.current.value, email.current.value, phone.current.value);
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
        placeholder: "Enter name of customer"
      })
    ),
    React.createElement(
      "div",
      { className: "input-cnt" },
      React.createElement(
        "div",
        null,
        "Email"
      ),
      React.createElement("input", {
        ref: email,
        className: "input",
        type: "text",
        id: "email",
        placeholder: "Enter email"
      })
    ),
    React.createElement(
      "div",
      { className: "input-cnt" },
      React.createElement(
        "div",
        null,
        "Phone No."
      ),
      React.createElement("input", {
        ref: phone,
        className: "input",
        type: "number",
        id: "phone",
        placeholder: "Enter phone no."
      })
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { className: "customers-add-btn" },
        "Add Customer"
      )
    )
  );
}