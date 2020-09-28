import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DropDown from '../DropDown';

describe('Testing DropDown component if it', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DropDown list={[]} handleSelect={() => {}}></DropDown>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<DropDown list={[{name: 'John'}, {name: 'Stones'}]} handleSelect={() => {}}></DropDown>).toJSON();
    expect(tree).toMatchSnapshot();
  });

})