import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
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

  let container;

  beforeEach(async () => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify(customersListData));
    container = mount(<Router><CustomersList /></Router>);
    await act(async () => { });
    container.update();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CustomersList></CustomersList>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('makes fetch calls', async () => {
    expect(container.html()).toMatchSnapshot();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('handles fetch errors', async () => {
    fetch.mockRejectOnce(['Error', {status: 200}]);
    const container = mount(<Router><CustomersList /></Router>);
    await act(async () => { });
    container.update();
    expect(container.html()).toMatchSnapshot();
  });

  it('displays correct button type', async () => {
    expect(container.find('.customers-new-btn').prop('type')).toEqual('button');
    expect(container.find('.simple-btn').prop('type')).toEqual('button');
  });

  it('displays correct number of table components', async () => {
    expect(container.find('table')).toHaveLength(1);
    expect(container.find('tr')).toHaveLength(3);
  });

  it('displays correct table columns', async () => {
    const tr0 = container.find('tr').at(0);
    expect(tr0.childAt(0).contains('NAME')).toEqual(true);
    expect(tr0.childAt(1).contains('EMAIL')).toEqual(true);
    expect(tr0.childAt(2).contains('CONTACT')).toEqual(true);
    expect(tr0.childAt(3).contains('CREATED AT')).toEqual(true);
  });

  it('displays correct table data', async () => {
    const tr1 = container.find('tr').at(1);
    const tr2 = container.find('tr').at(2);
    expect(tr1.childAt(0).contains('David Silva')).toEqual(true);
    expect(tr1.childAt(1).contains('s@s.com')).toEqual(true);
    expect(tr1.childAt(2).contains('2938475867')).toEqual(true);
    expect(tr1.childAt(3).contains('Tue Sep 22 2020')).toEqual(true);
    expect(tr2.childAt(0).contains('John Stones')).toEqual(true);
    expect(tr2.childAt(1).contains('s@s.com')).toEqual(true);
    expect(tr2.childAt(2).contains('2837495867')).toEqual(true);
    expect(tr2.childAt(3).contains('Mon Sep 21 2020')).toEqual(true);
  });

  it('contains button which turns filter on', async () => {
    let simpleButton = container.find('.simple-btn');
    simpleButton.simulate('click');
    const filterInput = container.find('.filter-input');
    expect(filterInput).toHaveLength(1);
    expect(filterInput.is('input')).toEqual(true);
    simpleButton = container.find('.simple-btn');
    expect(simpleButton).toHaveLength(1);
    expect(simpleButton.is('button')).toEqual(true);
    expect(simpleButton.type()).toEqual('button');
  });
  
  it('handles filter change', async () => {
    container.find('.simple-btn').simulate('click');
    container.find('.filter-input').simulate('change', {target: {value: 'Da'}});
    expect(container.find('table').text().includes('John Stones')).toEqual(false);
  });

  it('contains button which turns filter off', async () => {
    container.find('.simple-btn').simulate('click');
    container.find('.simple-btn').simulate('click');
    expect(container.find('.filter-container').contains('<button type="button" class="simple-btn">Filter</button>'));
  });

});
