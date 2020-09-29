import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import DropDown from '../DropDown';

describe('Testing DropDown component if it', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DropDown list={[]} handleSelect={() => {}}></DropDown>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const container = mount(<DropDown list={[{name: 'David'}, {name: 'John'}]} handleSelect={() => {}}></DropDown>);
    expect(container.debug()).toMatchSnapshot();
  });

})