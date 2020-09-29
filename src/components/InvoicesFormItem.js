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
      <td align="center">
        <input
          className="new-invoice-quantity"
          type="number"
          name="quantity"
          min="1"
          max="5"
          defaultValue={data.quantity}
          required
          onInput={(e) => {
            handleQuantityChange(Number(e.target.value), index);
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
