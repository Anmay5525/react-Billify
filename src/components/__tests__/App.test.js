import React from 'react';
import { mount } from 'enzyme';
import "react-toastify/dist/ReactToastify.css";
import '../App';
import InvoicesList from '../InvoicesList';

describe('Testing App component if it', () => {
  
  it('renders without crashing', () => {
    const container = mount(<InvoicesList />);
  });

});