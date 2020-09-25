import React from 'react';
import ReactDOM, { render } from 'react-dom';
import renderer from 'react-test-renderer';
import Filter from '../Filter';

describe('Testing Filter component if it', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filter handleChange={() => {}}></Filter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Filter handleChange={() => {}}></Filter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});