import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ItemsList from '../ItemsList';
import { BrowserRouter as Router } from "react-router-dom";

const itemsListData = {
  "entity": "collection",
  "count": 2,
  "items": [
    {
      "id": "item_FfjVoCpn6hG1Wu",
      "active": true,
      "name": "Kora Kagaz",
      "description": "",
      "amount": 1000,
      "unit_amount": 1000,
      "currency": "INR",
      "type": "invoice",
      "unit": null,
      "tax_inclusive": false,
      "hsn_code": null,
      "sac_code": null,
      "tax_rate": null,
      "tax_id": null,
      "tax_group_id": null,
      "created_at": 1600702921
    },
    {
      "id": "item_Ffd9vOPr1yKiUC",
      "active": true,
      "name": "disc",
      "description": "disc",
      "amount": 30000,
      "unit_amount": 30000,
      "currency": "INR",
      "type": "invoice",
      "unit": null,
      "tax_inclusive": false,
      "hsn_code": null,
      "sac_code": null,
      "tax_rate": null,
      "tax_id": null,
      "tax_group_id": null,
      "created_at": 1600680549
    },
  ]
};

describe('Testing ItemsList component if it', () => {

  let container;

  beforeEach(async () => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify(itemsListData));
    container = mount(<Router><ItemsList /></Router>);
    await act(async () => { });
    container.update();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemsList></ItemsList>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('makes fetch calls', async () => {
    expect(container.html()).toMatchSnapshot();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('handles fetch errors', async () => {
    fetch.mockRejectOnce(['Error', {status: 200}]);
    const container = mount(<Router><ItemsList /></Router>);
    await act(async () => { });
    container.update();
    expect(container.html()).toMatchSnapshot();
  });

  it('displays correct button type', async () => {
    expect(container.find('.items-new-btn').prop('type')).toEqual('button');
  });

  it('displays correct number of table components', async () => {
    expect(container.find('table')).toHaveLength(1);
    expect(container.find('tr')).toHaveLength(3);
  });

  it('displays correct table columns', async () => {
    const tr0 = container.find('tr').at(0);
    expect(tr0.childAt(0).contains('NAME')).toEqual(true);
    expect(tr0.childAt(1).contains('DESCRIPTION')).toEqual(true);
    expect(tr0.childAt(2).contains('AMOUNT')).toEqual(true);
    expect(tr0.childAt(3).contains('CURRENCY')).toEqual(true);
  });

  it('displays correct table DATA', async () => {
    const [tr1, tr2] = [container.find('tr').at(1), container.find('tr').at(2)];
    expect(tr1.childAt(0).contains('Kora Kagaz')).toEqual(true);
    expect(tr1.childAt(1).children().debug().length).toEqual(0);
    expect(tr1.childAt(2).contains(10)).toEqual(true);
    expect(tr1.childAt(3).contains('INR')).toEqual(true);
    expect(tr2.childAt(0).contains('disc')).toEqual(true);
    expect(tr2.childAt(1).contains('disc')).toEqual(true);
    expect(tr2.childAt(2).contains(300)).toEqual(true);
    expect(tr2.childAt(3).contains('INR')).toEqual(true);
  });

});