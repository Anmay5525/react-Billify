import { mount } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import Loader from "../Loader";

describe("Testing Loader component if it ", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches snapshot", () => {
    const container = mount(<Loader />);
    expect(container.html()).toMatchSnapshot();
  });
});
