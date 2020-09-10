var _React = React,
    useRef = _React.useRef;


export default function NewItemForm(_ref) {
  var handleNewItem = _ref.handleNewItem;

  var name = useRef();
  var amount = useRef();
  var description = useRef();

  return React.createElement(
    "div",
    { className: "items-form" },
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
        type: "text",
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
        {
          className: "items-add-btn",
          onClick: function onClick() {
            return handleNewItem(name.current.value, amount.current.value, description.current.value);
          }
        },
        "Add Item"
      )
    )
  );
}