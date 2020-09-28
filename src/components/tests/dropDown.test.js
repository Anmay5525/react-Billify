import React from 'react';
import renderer from 'react-test-renderer';
import DropDown from '../DropDown';

describe('<Dropdown/>',()=>{
    it('renders correctly (for two items in list)',()=>{
        const tree=renderer.create(
        <DropDown
            list={[{name:"name1"},{name:"name2"}]}
            handleSelect={()=>{}}
        />)
    });
    it('renders correctly for empty array as list',()=>{
        const tree=renderer.create(
        <DropDown
            list={[]}
            handleSelect={()=>{}}
        />)
    });
})