import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import InvoicesList from "../InvoicesList";

const invoicesListData = {
  entity: "collection",
  count: 1,
  items: [
    {
      id: "inv_Fg1JWqxU28xdI6",
      entity: "invoice",
      receipt: null,
      invoice_number: null,
      customer_id: "cust_FfdAl5kGR1Rk4v",
      customer_details: {
        id: "cust_FfdAl5kGR1Rk4v",
        name: "Parmanad",
        email: "parmanand@example.com",
        contact: "9920391003",
        gstin: null,
        billing_address: null,
        shipping_address: null,
        customer_name: "Parmanad",
        customer_email: "parmanand@example.com",
        customer_contact: "9920391003",
      },
      order_id: "order_Fg1JWtRICHHnz8",
      line_items: [
        {
          id: "li_Fg1JWrtQHCafM9",
          item_id: "item_Ffd9vOPr1yKiUC",
          ref_id: null,
          ref_type: null,
          name: "disc",
          description: "disc",
          amount: 30000,
          unit_amount: 30000,
          gross_amount: 30000,
          tax_amount: 0,
          taxable_amount: 30000,
          net_amount: 30000,
          currency: "INR",
          type: "invoice",
          tax_inclusive: false,
          hsn_code: null,
          sac_code: null,
          tax_rate: null,
          unit: null,
          quantity: 1,
          taxes: [],
        },
      ],
      payment_id: null,
      status: "issued",
      expire_by: 1601251200,
      issued_at: 1600765613,
      paid_at: null,
      cancelled_at: null,
      expired_at: null,
      sms_status: "sent",
      email_status: "sent",
      date: 1600992000,
      terms: null,
      partial_payment: false,
      gross_amount: 30000,
      tax_amount: 0,
      taxable_amount: 30000,
      amount: 30000,
      amount_paid: 0,
      amount_due: 30000,
      currency: "INR",
      currency_symbol: "₹",
      description: null,
      notes: [],
      comment: "akd",
      short_url: "https://rzp.io/i/ioJMd5r",
      view_less: true,
      billing_start: null,
      billing_end: null,
      type: "invoice",
      group_taxes_discounts: false,
      created_at: 1600765613,
      idempotency_key: null,
    },
  ],
};

describe("Testing InvoicesList component if it", () => {
  let container;

  beforeEach(async () => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify(invoicesListData));
    container = mount(
      <Router>
        <InvoicesList />
      </Router>
    );
    await act(async () => {});
    container.update();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InvoicesList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("makes fetch calls", async () => {
    expect(container.html()).toMatchSnapshot();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("handles fetch errors", async () => {
    fetch.mockRejectOnce(["Error", { status: 200 }]);
    const errContainer = mount(
      <Router>
        <InvoicesList />
      </Router>
    );
    await act(async () => {});
    errContainer.update();
    expect(errContainer.html()).toMatchSnapshot();
  });

  it("displays correct button type", async () => {
    expect(container.find(".invoices-new-btn").prop("type")).toEqual("button");
  });

  it("displays correct number of table components", async () => {
    expect(container.find("table")).toHaveLength(1);
    expect(container.find("tr")).toHaveLength(2);
  });

  it("displays correct table columns", async () => {
    const tr0 = container.find("tr").at(0);
    expect(tr0.childAt(0).contains("DATE")).toEqual(true);
    expect(tr0.childAt(1).contains("CUSTOMER")).toEqual(true);
    expect(tr0.childAt(2).contains("STATUS")).toEqual(true);
    expect(tr0.childAt(3).contains("AMOUNT")).toEqual(true);
    expect(tr0.childAt(4).contains("AMOUNT DUE")).toEqual(true);
  });

  it("displays correct table data", async () => {
    const tr1 = container.find("tr").at(1);
    expect(tr1.childAt(0).contains("Fri Sep 25 2020")).toEqual(true);
    expect(tr1.childAt(1).contains("Parmanad")).toEqual(true);
    expect(tr1.childAt(2).contains("ISSUED")).toEqual(true);
    expect(tr1.childAt(3).contains(300)).toEqual(true);
    expect(tr1.childAt(4).contains(300)).toEqual(true);
  });
});
