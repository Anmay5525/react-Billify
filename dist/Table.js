var Table = function Table(_ref) {
  var fields = _ref.fields,
      data = _ref.data;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "table",
      { className: "table" },
      React.createElement(
        "thead",
        null,
        fields.map(function (el) {
          return React.createElement(
            "th",
            null,
            el.toUpperCase().replace("_", " ")
          );
        })
      ),
      data.map(function (el) {
        return React.createElement(
          "tr",
          { "class": "tr" },
          fields.map(function (el1) {
            return React.createElement(
              "td",
              null,
              el[el1]
            );
          })
        );
      })
    )
  );
};

export default Table;