export default function Filter(_ref) {
  var handleChange = _ref.handleChange;

  return React.createElement(
    "div",
    null,
    React.createElement("input", {
      placeholder: "Filter by name",
      autoFocus: true,
      className: "filter-input",
      type: "text",
      onChange: handleChange
    })
  );
}