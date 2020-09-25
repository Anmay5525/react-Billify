import React from 'react';
import Table from '../Table';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});


describe('<Table/>',()=>{
    it('renders correctly',()=>{
        const tree=shallow(<Table 
            fields={["name", "description", "amount", "currency"]}
            data={[{
                name: "item1Name",
                description: "description1",
                amount: 10000,
                currency: "INR"
            },{
                name: "item1Name",
                description: "description1",
                amount: 10000,
                currency: "INR"
            }]}
            />);
        expect(tree).toMatchSnapshot();
    });
})