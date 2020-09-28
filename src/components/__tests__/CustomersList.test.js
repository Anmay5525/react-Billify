import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
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

  it('displays correct button type', async () => {
    fetch.mockResponseOnce(JSON.stringify(customersListData));
    const container = mount(<Router><CustomersList /></Router>);
    await act(async () => { });
    container.update();
    expect(container.find('button').at(0).type()).toEqual('button');
  });

  it('displays correct button type', async () => {
    fetch.mockResponseOnce(JSON.stringify(customersListData));
    const container = mount(<Router><CustomersList /></Router>);
    await act(async () => { });
    container.update();
    expect(container.find('button').at(1).type()).toEqual('button');
  });

  it('displays correct table columns', async () => {
    fetch.mockResponseOnce(JSON.stringify(customersListData));
    const container = mount(<Router><CustomersList /></Router>);
    await act(async () => { });
    container.update();
    expect(container.find('tr').at(0).childAt(0).contains('NAME')).toEqual(true);
    expect(container.find('tr').at(0).childAt(1).contains('EMAIL')).toEqual(true);
    expect(container.find('tr').at(0).childAt(2).contains('CONTACT')).toEqual(true);
    expect(container.find('tr').at(0).childAt(3).contains('CREATED AT')).toEqual(true);
  });

  it('displays correct table data', async () => {
    fetch.mockResponseOnce(JSON.stringify(customersListData));
    const container = mount(<Router><CustomersList /></Router>);
    await act(async () => { });
    container.update();
    expect(container.find('tr').at(1).childAt(0).contains('David Silva')).toEqual(true);
    expect(container.find('tr').at(1).childAt(1).contains('s@s.com')).toEqual(true);
    expect(container.find('tr').at(1).childAt(2).contains('2938475867')).toEqual(true);
    expect(container.find('tr').at(1).childAt(3).contains('Tue Sep 22 2020')).toEqual(true);
    expect(container.find('tr').at(2).childAt(0).contains('John Stones')).toEqual(true);
    expect(container.find('tr').at(2).childAt(1).contains('s@s.com')).toEqual(true);
    expect(container.find('tr').at(2).childAt(2).contains('2837495867')).toEqual(true);
    expect(container.find('tr').at(2).childAt(3).contains('Mon Sep 21 2020')).toEqual(true);
  });

  it('contains button which turns filter on', async () => {
    fetch.mockResponseOnce(JSON.stringify(customersListData));
    const container = mount(<Router><CustomersList /></Router>);
    await act(async () => { });
    container.update();
    container.find('.filter-container').childAt(0).simulate('click');
    expect(container.find('.filter-container').childAt(0).childAt(0).childAt(0).is('input')).toEqual(true);
    expect(container.find('.filter-container').childAt(1).is('button')).toEqual(true);
    expect(container.find('.filter-container').childAt(1).type()).toEqual('button');
  });
  
  it('handles filter change', async () => {
    fetch.mockResponseOnce(JSON.stringify(customersListData));
    const container = shallow(<Router><CustomersList /></Router>);
    await act(async () => { });
    container.update();
    const instance = container.instance();
    console.log(CustomersList.prototype);
    // const spy = jest.spyOn(instance, 'handleFilterChange');
    // container.find('.filter-container').childAt(0).simulate('click');
    // console.log(container.find('input').html());
    // container.find('input').simulate('change', {target: {value: '50'}});
    // console.log(container.find('input').render().attr('value'));
    // expect(spy).toHaveBeenCalledTimes(1);
  });

});
