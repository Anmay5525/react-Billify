import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
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

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemsList></ItemsList>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders loader', () => {
    const tree = renderer.create(<ItemsList></ItemsList>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('makes fetch calls', async () => {
    fetch.mockResponseOnce(JSON.stringify(itemsListData));
    const container = mount(<Router><ItemsList /></Router>);
    await act(async () => {
      (res) => setTimeout(res, 0);
    });
    container.update();
    expect(container.html()).toMatchSnapshot();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('handles fetch errors', async () => {
    fetch.mockRejectOnce(['Error', {status: 200}]);
    const container = mount(<Router><ItemsList /></Router>);
    await act(async () => {
      (res) => setTimeout(res, 0);
    });
    container.update();
    expect(container.html()).toMatchSnapshot();
  });

});