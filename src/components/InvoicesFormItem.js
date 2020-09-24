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
          type="text"
          name="quantity"
          pattern="^[1-9]*"
          maxLength="2"
          value={data.quantity}
          onChange={(e) => {
            if (Number(e.target.value) <= 5) {
              handleQuantityChange(Number(e.target.value), index);
            } else {
              e.target.value = 5;
              handleQuantityChange(Number(e.target.value), index);
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
