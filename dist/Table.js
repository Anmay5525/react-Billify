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
        React.createElement(
          "tr",
          null,
          fields.map(function (el) {
            return React.createElement(
              "th",
              { key: JSON.stringify(el) },
              el.toUpperCase().replace("_", " ")
            );
          })
        )
      ),
      React.createElement(
        "tbody",
        null,
        data.map(function (el, j) {
          return React.createElement(
            "tr",
            { className: "tr", key: JSON.stringify(el) + j },
            fields.map(function (field, i) {
              return React.createElement(
                "td",
                { key: JSON.stringify(el) + JSON.stringify(field) + i },
                el[field]
              );
            })
          );
        })
      )
    )
  );
};

export default Table;