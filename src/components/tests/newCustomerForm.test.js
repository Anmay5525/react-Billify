import React from 'react';
import renderer from 'react-test-renderer';
import NewCustomerForm from '../NewCustomerForm';

it("newCustomerForm runs without crashing",()=>{
    const tree=renderer.create(<NewCustomerForm/>);
    expect(tree).toMatchSnapshot();
});