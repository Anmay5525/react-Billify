import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InvoicesFormItem from "./InvoicesFormItem";
import Loader from "./Loader";
import DropDown from "./DropDown";

export default function NewInvoiceForm({ handleSubRouteChange }) {
  const [isVisibleItem, setIsVisibleItem] = useState(false);
  const [isVisibleCustomer, setisVisibleCustomer] = useState(true);
  const [dummy, setDummy] = useState(false);
  const [availableItems, setAvailableItems] = useState(null);
  const [availableCustomers, setAvailableCustomers] = useState(null);
  const [selectedCustomer, setselectedCustomer] = useState(null);
  const [selectedItems, setSelectedItems] = useState([
    // { name: "model S", price: 100, id: "sasfwe", quantity: 1, amount: 100 },
    // {
    //   name: "modelasdasdasd S",
    //   price: 1003,
    //   id: "hgjhg",
    //   quantity: 1,
    //   amount: 1003,
    // },
  ]);
  const handleNewInvoice = (e) => {
    e.preventDefault();

    if (!selectedCustomer) {
      toast.warn("Please select a customer!!");
    }
    if (!selectedItems.length) {
      toast.warn("Please select atleast 1 item!!");
    }

    if (selectedItems.length && selectedCustomer) {
      const dueDate = new Date(e.target.due.value).getTime();

      const url = "https://rzp-training.herokuapp.com/team1/invoices";

      const inv = {
        customer_id: selectedCustomer.id,
        line_items: [],

        // send date in seconds
        expire_by: Math.round(dueDate / 1000),
      };
      selectedItems.forEach((item) => {
        inv.line_items.push({
          item_id: item.id,
          quantity: item.quantity,
        });
      });

      //   console.log(inv);

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inv),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return toast(
            `Something went wrong. Server responded with status ${res.status}`
          );
        })
        .then((r) => {
          if (r) {
            toast.success("New invoice created");
            handleSubRouteChange("list");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const handleItemSelect = (e) => {
    const selected = JSON.parse(e.target.value);
    // if already selected an item then do nothing
    if (
      !selectedItems.find((el) => {
        return el.id === selected.id;
      })
    ) {
      const obj = [
        ...selectedItems,
        {
          name: selected.name,
          price: selected.unit_amount / 100,
          id: selected.id,
          quantity: 1,
          amount: selected.unit_amount / 100,
        },
      ];
      setSelectedItems(obj);
      setIsVisibleItem(false);
    } else {
      toast.warn("Item already added. Please select some other item!");
    }
  };

  const handleCustomerSelect = (e) => {
    const selected = JSON.parse(e.target.value);

    setselectedCustomer(selected);
    setisVisibleCustomer(false);
  };

  const handleQuantityChange = (quant, index) => {
    const cp = { ...selectedItems[index] };
    cp.quantity = Number(quant);
    cp.amount = Number((cp.quantity * cp.price).toFixed(2));

    setSelectedItems((prev) => {
      // eslint-disable-next-line no-param-reassign
      prev[index] = cp;
      return prev;
    });

    setDummy((prev) => !prev);
  };

  const handleDelete = (index) => {
    const cp = [...selectedItems];
    cp.splice(index, 1);
    setSelectedItems(cp);
  };

  const controller = new AbortController();
  const { signal } = controller;

  useEffect(() => {
    fetch("https://rzp-training.herokuapp.com/team1/items", { signal })
      .then((res) => res.json())
      .then((r) => setAvailableItems(r))
      .catch((er) => console.log(er));

    fetch("https://rzp-training.herokuapp.com/team1/customers", { signal })
      .then((res) => res.json())
      .then((r) => setAvailableCustomers(r))
      .catch((er) => console.log(er));

    return () => {
      controller.abort();
    };
  }, []);
  if (availableCustomers && availableItems) {
    let total = 0;
    selectedItems.forEach((el) => {
      total += el.amount;
      total = Number(total.toFixed(2));
    });

    // console.log(selectedItems, total);
    return (
      <div className="content">
        {/* <ToastContainer /> */}
        <form onSubmit={(e) => handleNewInvoice(e)}>
          <div className="invoices-title-container">
            <div className="invoices-title">Invoices</div>
            <button type="submit" className="invoices-new-btn">
              Save Invoice
            </button>
          </div>
          <div className="new-invoice-customer-details">
            <div className="billto-cont">
              <span>Bill to</span>
              <div className="billto-details">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "none",
                    resize: "none",
                    padding: "4px 4px 4px 4px",
                    fontSize: "0.9em",
                  }}
                >
                  <span>{selectedCustomer ? selectedCustomer.name : ""}</span>
                  <span>
                    {selectedCustomer ? selectedCustomer.contact : ""}
                  </span>
                  <span>{selectedCustomer ? selectedCustomer.email : ""}</span>
                </div>
                {!isVisibleCustomer ? (
                  <button
                    type="button"
                    className="billto-change-btn"
                    onClick={() => setisVisibleCustomer(true)}
                  >
                    Change
                  </button>
                ) : (
                  ""
                )}
              </div>
              {isVisibleCustomer ? (
                <DropDown
                  handleSelect={handleCustomerSelect}
                  list={availableCustomers.items}
                />
              ) : (
                ""
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Issued At</span>
              <input type="date" required name="issue" className="date" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Due Date</span>
              <input type="date" required name="due" className="date" />
            </div>
          </div>
          <div className="new-invoice-table-cont">
            <table className="new-invoice-table">
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item, i) => {
                  return (
                    <InvoicesFormItem
                      index={i}
                      data={item}
                      handleQuantityChange={handleQuantityChange}
                      handleDelete={handleDelete}
                      key={item.name + window.performance.now()}
                    />
                  );
                })}
              </tbody>
            </table>
            <button
              type="button"
              className="simple-btn"
              onClick={() => setIsVisibleItem(true)}
            >
              Add Item
            </button>
            <div className="select-cnt">
              {isVisibleItem ? (
                <DropDown
                  handleSelect={handleItemSelect}
                  list={availableItems.items}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
        <div className="invoices-info-container">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Notes</span>
            <textarea
              style={{ width: "80%" }}
              className="new-invoice-textarea"
              name="notes"
              rows="4"
            />
          </div>
          <div className="invoices-info">
            <table className="new-invoice-info-table">
              <tbody>
                {selectedItems.map((item) => {
                  return (
                    <tr key={item.amount + window.performance.now()}>
                      <td>{item.name}</td>
                      <td align="right">
                        <span>x</span>
                        {item.quantity}
                      </td>
                      <td align="right">
                        <span>&#8377;</span>
                        {item.amount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <hr width="100%" />
            <div
              style={{
                padding: "0px 10px 0px 6px",
                fontSize: "0.92em",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Total amount:</span>
              <span style={{ color: "#5851d7" }}>
                <span>&#8377;</span>
                {total}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Loader />;
}

NewInvoiceForm.propTypes = {
  handleSubRouteChange: PropTypes.func.isRequired,
};
