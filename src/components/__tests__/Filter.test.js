import { mount } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import Filter from "../Filter";

describe("Testing Filter component if it", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Filter handleChange={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches snapshot", () => {
    const container = mount(<Filter handleChange={() => {}} />);
    expect(container.debug()).toMatchSnapshot();
  });
});
