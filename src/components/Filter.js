import React from "react";

export default function Filter({ handleChange }) {
  return (
    <div>
      <input
        placeholder="Filter by name"
        autoFocus
        className="filter-input"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}
