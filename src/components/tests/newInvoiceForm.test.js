import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import NewInvoiceForm from '../NewInvoiceForm';
import Loader from '../Loader';

configure({adapter:new Adapter()});


describe('<NewInvoiceForm/>',()=>{
    it('renders loader image when in data is not loaded',()=>{
        const tree=shallow(<NewInvoiceForm />);
        expect(tree.find(Loader)).toHaveLength(1);
    });

    it("",()=>{
        
    });
});