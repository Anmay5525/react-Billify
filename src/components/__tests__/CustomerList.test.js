import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import CustomersList from '../CustomersList';
import { BrowserRouter as Router } from "react-router-dom";

const customersListData = {
  "entity": "collection",
  "count": 2,
  "items": [
    {
      "id": "cust_Fg0tl7Y2qra6SJ",
      "entity": "customer",
      "name": "David Silva",
      "email": "s@s.com",
      "contact": "2938475867",
      "gstin": null,
      "notes": [],
      "created_at": 1600764149
    },
    {
      "id": "cust_FfeM7EaKLd8SOh",
      "entity": "customer",
      "name": "John Stones",
      "email": "s@s.com",
      "contact": "2837495867",
      "gstin": null,
      "notes": [],
      "created_at": 1600684763
    }
  ]
};

describe('Testing CustomersList component if it', () => {

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CustomersList></CustomersList>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders loader', () => {
    const tree = renderer.create(<CustomersList></CustomersList>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('makes fetch calls', async () => {
    fetch.mockResponseOnce(JSON.stringify(customersListData));
    const container = mount(<Router><CustomersList /></Router>);
    await act(async () => {
      (res) => setTimeout(res, 0);
    });
    container.update();
    expect(container.html()).toMatchSnapshot();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('handles fetch errors', async () => {
    fetch.mockRejectOnce(['Error', {status: 200}]);
    const container = mount(<Router><CustomersList /></Router>);
    await act(async () => {
      (res) => setTimeout(res, 0);
    });
    container.update();
    expect(container.html()).toMatchSnapshot();
  });

});
