import React from 'react';
import { mount,configure, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import NewInvoiceForm from '../NewInvoiceForm';
import Loader from '../Loader';
import  ReactDOM from "react-dom";

require('jest-fetch-mock').enableMocks();


configure({adapter:new Adapter()});

const mocItem={
    "entity": "collection",
    "count": 2,
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
        },
        {
            "id": "item_Ffd9vOPr1yKiUC",
            "active": true,
            "name": "disc",
            "description": "disc",
            "amount": 30000,
            "unit_amount": 30000,
            "currency": "INR",
            "type": "invoice",
            "unit": null,
            "tax_inclusive": false,
            "hsn_code": null,
            "sac_code": null,
            "tax_rate": null,
            "tax_id": null,
            "tax_group_id": null,
            "created_at": 1600680549
        },
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
        fetch.mockResponseOnce(JSON.stringify(mocItem));
        fetch.mockResponseOnce(JSON.stringify(mocCustomer));
        const container=mount(<NewInvoiceForm/>);
        await act(async ()=>{
            res => setTimeout(res, 0);
        });
        container.update();
        expect(container.html()).toMatchSnapshot();
        expect(fetch).toHaveBeenCalledTimes(2);
    });

    it("handles customer select properly",async ()=>{
        fetch.mockResponseOnce(JSON.stringify(mocItem));
        fetch.mockResponseOnce(JSON.stringify(mocCustomer));
        const container=mount(<NewInvoiceForm/>);
        await act(async ()=>{
            res => setTimeout(res, 0);
        });
        container.update();
        container.find('.billto-cont').find('select').simulate('change',{target:{value:JSON.stringify(
            {
                "id": "cust_FfeM7EaKLd8SOh",
                "entity": "customer",
                "name": "John Stones",
                "email": "s@s.com",
                "contact": "2837495867",
                "gstin": null,
                "notes": [],
                "created_at": 1600684763
            }
        )}});
        expect(container.html()).toMatchSnapshot();
        expect(fetch).toHaveBeenCalledTimes(2);
        expect(container.find('.billto-change-btn').text()).toBe('Change');
        expect(container.find('.billto-details').find('span')).toHaveLength(3);
        expect(container.find('.billto-details').find('span').at(0).text()).toBe('John Stones');
    });

    it('handles item functionality correctly',async ()=>{
        fetch.mockResponseOnce(JSON.stringify(mocItem));
        fetch.mockResponseOnce(JSON.stringify(mocCustomer));
        const container=mount(<NewInvoiceForm/>);
        await act(async ()=>{
            res => setTimeout(res, 0);
        });
        container.update();
        container.find('.new-invoice-table-cont').find('button').simulate('click');
        expect(container.find('.new-invoice-table-cont').find('.option')).toHaveLength(3);
        container.find('.new-invoice-table-cont').find('select').simulate('change',{target:{value:JSON.stringify(
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
        )}});
        expect(container.html()).toMatchSnapshot();
        expect(container.find('.new-invoice-table-cont').find('tbody')).toHaveLength(1);
        expect(container.find('.new-invoice-table-cont').find('tbody').find('td')).toHaveLength(5);

        container.find('.new-invoice-table-cont').find('.add-item-btn').simulate('click');
        expect(container.find('.new-invoice-table-cont').find('.option')).toHaveLength(3);
        container.find('.new-invoice-table-cont').find('select').simulate('change',{target:{value:JSON.stringify(
            {
                "id": "item_Ffd9vOPr1yKiUC",
                "active": true,
                "name": "disc",
                "description": "disc",
                "amount": 30000,
                "unit_amount": 30000,
                "currency": "INR",
                "type": "invoice",
                "unit": null,
                "tax_inclusive": false,
                "hsn_code": null,
                "sac_code": null,
                "tax_rate": null,
                "tax_id": null,
                "tax_group_id": null,
                "created_at": 1600680549
            }
        )}});
        expect(container.html()).toMatchSnapshot();
        expect(container.find('.new-invoice-table-cont').find('tbody')).toHaveLength(1);
        expect(container.find('.new-invoice-table-cont').find('tbody').find('td')).toHaveLength(10);

        container.find('.new-invoice-table-cont').find('tbody').find('.simple-btn').at(0).simulate('click');
        expect(container.html()).toMatchSnapshot();

    })

});