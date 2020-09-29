import React from 'react';
import { mount,configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from "enzyme";
import NewInvoiceForm from '../NewInvoiceForm';
import Loader from '../Loader';

require('jest-fetch-mock').enableMocks();


configure({adapter:new Adapter()});

const moc={
    "entity": "collection",
    "count": 1,
    "items": [
        {
            "id": "item_FfjVoCpn6hG1Wu",
            "active": true,
            "name": "Kora Kagaz",
            "description": "",
            "amount": 1000,
            "unit_amount": 1000,
            "currency": "INR",
            "type": "invoice",
            "unit": null,
            "tax_inclusive": false,
            "hsn_code": null,
            "sac_code": null,
            "tax_rate": null,
            "tax_id": null,
            "tax_group_id": null,
            "created_at": 1600702921
        }
    ]
};
const mocCustomer={
    "entity": "collection",
    "count": 2,
    "items": [
        {
            "id": "cust_Fg0tl7Y2qra6SJ",
            "entity": "customer",
            "name": "David Silva",
            "email": "s@s.com",
            "contact": "2938475867",
            "gstin": null,
            "notes": [],
            "created_at": 1600764149
        },
        {
            "id": "cust_FfeM7EaKLd8SOh",
            "entity": "customer",
            "name": "John Stones",
            "email": "s@s.com",
            "contact": "2837495867",
            "gstin": null,
            "notes": [],
            "created_at": 1600684763
        },
    ]
};

beforeEach(() => {
    fetch.resetMocks();
});


describe('<NewInvoiceForm/>',()=>{
    it('renders loader image when in data is not loaded',()=>{
        const wrapper=shallow(<NewInvoiceForm />);
        expect(wrapper.find(Loader)).toHaveLength(1);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("renders loader image when in data is loaded",async ()=>{
        fetch.mockResponseOnce(JSON.stringify(moc));
        fetch.mockResponseOnce(JSON.stringify(mocCustomer));
        const container=mount(<NewInvoiceForm/>);
        await act(async ()=>{
            res => setTimeout(res, 0);
        });
        container.update();
        expect(container.html()).toMatchSnapshot();
        expect(fetch).toHaveBeenCalledTimes(2);
    });
});