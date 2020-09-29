import React from 'react';
import { mount } from 'enzyme';
import '../App';

describe('Testing App component if it', () => {
  
  it('renders without crashing', () => {
    const container = mount(<InvoicesList />);
  });

});