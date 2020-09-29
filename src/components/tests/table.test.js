import React from 'react';
import Table from '../Table';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';


configure({adapter:new Adapter()});


describe('<Table/>',()=>{
    it('renders correctly without data',()=>{
        const tree=renderer.create(<Table
        fields={["h1","h2","h3","h4"]}
        data={[

        ]}
        />)
        expect(tree).toMatchSnapshot();
    });
    
    it('renders correctly with non-matching fieldnames and data keys',()=>{
        const tree=renderer.create(<Table
        fields={["h1","h2","h3","h4"]}
        data={[
            {
                name:"name1",
                description:"description",
                amount:10000,
                currency:"INR"
            },
            {
                name:"name2",
                description:"description",
                amount:20000,
                currency:"INR"
            }
        ]}
        />)
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with matching fieldnames and data keys',()=>{
        const tree=renderer.create(<Table
        fields={["h1","h2","h3","h4"]}
        data={[
            {
                h1:"name1",
                h2:"description",
                h3:10000,
                h4:"INR"
            },
            {
                h1:"name2",
                h2:"description",
                h3:20000,
                h4:"INR"
            }
        ]}
        />)
        expect(tree).toMatchSnapshot();
    });
})