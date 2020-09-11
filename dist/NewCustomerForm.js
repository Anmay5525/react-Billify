var _React = React,
    useRef = _React.useRef;


export default function NewCustomerForm(_ref) {
  var handleNewCustomer = _ref.handleNewCustomer;

  var name = useRef();
  var email = useRef();
  var phone = useRef();

  return React.createElement(
    "div",
    { className: "customers-form" },
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
        {
          className: "customers-add-btn",
          onClick: function onClick() {
            return handleNewCustomer(name.current.value, email.current.value, phone.current.value);
          }
        },
        "Add Customer"
      )
    )
  );
}