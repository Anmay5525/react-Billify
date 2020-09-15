import React, { useState } from "react";
import PropTypes from "prop-types";

export default function InvoicesFormItem({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(item.price);
  return (
    <tr className="tr">
      <td>{item.name}</td>
      <td>
        <input
          type="number"
          min="1"
          max="3"
          defaultValue={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
            setAmount(item.price * e.target.value);
          }}
        />
      </td>
      <td>{item.price}</td>
      <td>{amount}</td>
    </tr>
  );
}

InvoicesFormItem.propTypes = {
  item: PropTypes.object.isRequired,
};
