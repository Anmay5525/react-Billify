import { mount } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import InvoicesForItem from "../InvoicesFormItem";

describe("Testing InvoicesForItem component if it ", () => {
  it("renders without crashing", () => {
    const tbody = document.createElement("tbody");
    ReactDOM.render(
      <InvoicesForItem
        index={1}
        data={{}}
        handleQuantityChange={() => {}}
        handleDelete={() => {}}
      />,
      tbody
    );
    ReactDOM.unmountComponentAtNode(tbody);
  });

  it("matches snapshot", () => {
    const container = mount(
      <InvoicesForItem
        index={1}
        data={{ name: "name", quantity: 0, price: 0, amount: 0 }}
        handleQuantityChange={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(container.debug()).toMatchSnapshot();
  });
});
