import React from "react";
import PropTypes from "prop-types";

export default function InvoicesFormItem({
  index,
  data,
  handleQuantityChange,
  handleDelete,
}) {
  return (
    <tr className="tr">
      <td>{data.name}</td>
      <td>
        <input
          className="new-invoice-quantity"
          type="number"
          min="1"
          max="5"
          name="quantity"
          defaultValue={data.quantity}
          onChange={(e) => {
            if (e.target.value <= 5) {
              handleQuantityChange(e.target.value, index);
            } else {
              e.target.value = 5;
            }
          }}
        />
      </td>
      <td>
        <span>&#8377;</span>
        {data.price}
      </td>
      <td>
        <span>&#8377;</span>
        {data.amount}
        {/* <span style={{ marginLeft: "10" }}>X</span> */}
      </td>
      <td>
        <button
          style={{ fontSize: "0.8em" }}
          type="button"
          className="simple-btn"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

InvoicesFormItem.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
