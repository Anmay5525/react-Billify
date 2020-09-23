import React from 'react';
import renderer from 'react-test-renderer';
import NewItemForm from '../NewItemForm';

it("newItemForm renders without crashing",()=>{
    const tree=renderer.create(<NewItemForm/>).toJSON();
    expect(tree).toMatchSnapshot();
});