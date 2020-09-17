import React from "react";
import PropTypes from "prop-types";

export default function DropDown({ list, handleSelect }) {
  return (
    <select
      style={{
        width: "100%",
        height: "26px",
      }}
      onChange={handleSelect}
    >
      <option className="option">Select Item</option>
      {list.map((item) => {
        return (
          <option
            className="option"
            key={item.name + window.performance.now()}
            value={JSON.stringify(item)}
          >
            {item.name}
          </option>
        );
      })}
    </select>
  );
}

DropDown.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelect: PropTypes.func.isRequired,
};
