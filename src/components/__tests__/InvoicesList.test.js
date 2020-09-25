import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import InvoicesList from '../InvoicesList';
import { BrowserRouter as Router } from "react-router-dom";
require('jest-fetch-mock').enableMocks();

const invoicesListData = {
  "entity": "collection",
  "count": 1,
  "items": [
    {
      "id": "inv_Fg1JWqxU28xdI6",
      "entity": "invoice",
      "receipt": null,
      "invoice_number": null,
      "customer_id": "cust_FfdAl5kGR1Rk4v",
      "customer_details": {
        "id": "cust_FfdAl5kGR1Rk4v",
        "name": "Parmanad",
        "email": "parmanand@example.com",
        "contact": "9920391003",
        "gstin": null,
        "billing_address": null,
        "shipping_address": null,
        "customer_name": "Parmanad",
        "customer_email": "parmanand@example.com",
        "customer_contact": "9920391003"
      },
      "order_id": "order_Fg1JWtRICHHnz8",
      "line_items": [
        {
          "id": "li_Fg1JWrtQHCafM9",
          "item_id": "item_Ffd9vOPr1yKiUC",
          "ref_id": null,
          "ref_type": null,
          "name": "disc",
          "description": "disc",
          "amount": 30000,
          "unit_amount": 30000,
          "gross_amount": 30000,
          "tax_amount": 0,
          "taxable_amount": 30000,
          "net_amount": 30000,
          "currency": "INR",
          "type": "invoice",
          "tax_inclusive": false,
          "hsn_code": null,
          "sac_code": null,
          "tax_rate": null,
          "unit": null,
          "quantity": 1,
          "taxes": []
        }
      ],
      "payment_id": null,
      "status": "issued",
      "expire_by": 1601251200,
      "issued_at": 1600765613,
      "paid_at": null,
      "cancelled_at": null,
      "expired_at": null,
      "sms_status": "sent",
      "email_status": "sent",
      "date": 1600992000,
      "terms": null,
      "partial_payment": false,
      "gross_amount": 30000,
      "tax_amount": 0,
      "taxable_amount": 30000,
      "amount": 30000,
      "amount_paid": 0,
      "amount_due": 30000,
      "currency": "INR",
      "currency_symbol": "₹",
      "description": null,
      "notes": [],
      "comment": "akd",
      "short_url": "https://rzp.io/i/ioJMd5r",
      "view_less": true,
      "billing_start": null,
      "billing_end": null,
      "type": "invoice",
      "group_taxes_discounts": false,
      "created_at": 1600765613,
      "idempotency_key": null
    }
  ]
};

// it('makes fetch calls', async (done) => {
//   fetch.mockResponse(JSON.stringify(invoiceListData));
//   // await act(async () => {container = mount(<Router><InvoicesList/></Router>)});
//   // expect(container.debug()).toMatchSnapshot();
//   let container;
//   await act(async() => container = mount(<Router><InvoicesList/></Router>));
//   setTimeout(() => {
//     // expectations here
//     expect(container.html()).toMatchSnapshot();
//     done();
//   }, 500);
// });

beforeEach(() => {
  fetch.resetMocks();
});

describe('Testing InvoicesList component if it', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InvoicesList></InvoicesList>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders loader', () => {
    const tree = renderer.create(<InvoicesList></InvoicesList>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('makes fetch calls', async () => {
    fetch.mockResponseOnce(JSON.stringify(invoicesListData));
    const container = mount(<Router><InvoicesList /></Router>);
    await act(async () => {
      await new Promise((res) => setTimeout(res, 0));
    });
    container.update();
    expect(container.html()).toMatchSnapshot();
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('handles fetch errors', async () => {
    fetch.mockRejectOnce(['Error', {status: 200}]);
    const container = mount(<Router><InvoicesList /></Router>);
    await act(async () => {
      await new Promise((res) => setTimeout(res, 0));
    });
    container.update();
    expect(container.html()).toMatchSnapshot();
  });

});
