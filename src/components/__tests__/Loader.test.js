import { mount, shallow } from 'enzyme';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import renderer from 'react-test-renderer';
import Loader from '../Loader';

describe('Testing Loader component if it ', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader></Loader>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const container = mount(<Loader />);
    expect(container.html()).toMatchSnapshot();
  });

})
