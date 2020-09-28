import React from 'react';
import ReactDOM from 'react-dom';
import { mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import LeftPanel from '../LeftPanel';
import { BrowserRouter as Router, MemoryRouter} from "react-router-dom";

describe('Testing LeftPanel component if it', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><LeftPanel></LeftPanel></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('makes Customers active', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/Customers']}>
      <LeftPanel></LeftPanel>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('makes Items active', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/Items']}>
      <LeftPanel></LeftPanel>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('makes Invoices active', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/Invoices']}>
      <LeftPanel></LeftPanel>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});