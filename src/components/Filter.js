import React from "react";
import PropTypes from "prop-types";

export default function Filter({ handleChange }) {
  return (
    <div>
      <input
        placeholder="Filter by name"
        className="filter-input"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
