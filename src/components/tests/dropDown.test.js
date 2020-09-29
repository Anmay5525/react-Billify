import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import DropDown from '../DropDown';

configure({adapter: new Adapter()});

describe('<Dropdown/>',()=>{
    it('renders correctly (for two items in list)',()=>{
        const tree=renderer.create(
        <DropDown
            list={[{name:"name1"},{name:"name2"}]}
            handleSelect={()=>{}}
        />)
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly for empty array as list',()=>{
        const tree=renderer.create(
        <DropDown
            list={[]}
            handleSelect={()=>{}}
        />)
        expect(tree).toMatchSnapshot();
    });
})