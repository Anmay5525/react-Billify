import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import LeftPanel from "../LeftPanel";

describe("Testing LeftPanel component if it", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <LeftPanel />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches Customers active snapshot", () => {
    const container = mount(
      <MemoryRouter initialEntries={["/Customers"]}>
        <LeftPanel />
      </MemoryRouter>
    );
    expect(container.debug()).toMatchSnapshot();
  });

  it("makes Customers active", () => {
    const container = mount(
      <MemoryRouter initialEntries={["/Customers"]}>
        <LeftPanel />
      </MemoryRouter>
    );
    expect(container.find("#Customers").hasClass("active")).toBeTruthy();
    expect(container.find("#Items").hasClass("active")).toBeFalsy();
    expect(container.find("#Invoices").hasClass("active")).toBeFalsy();
  });

  it("matches Items active snapshot", () => {
    const container = mount(
      <MemoryRouter initialEntries={["/Items"]}>
        <LeftPanel />
      </MemoryRouter>
    );
    expect(container.debug()).toMatchSnapshot();
  });

  it("makes Items active", () => {
    const container = mount(
      <MemoryRouter initialEntries={["/Items"]}>
        <LeftPanel />
      </MemoryRouter>
    );
    expect(container.find("#Customers").hasClass("active")).toBeFalsy();
    expect(container.find("#Items").hasClass("active")).toBeTruthy();
    expect(container.find("#Invoices").hasClass("active")).toBeFalsy();
  });

  it("matches Invoices active snapshot", () => {
    const container = mount(
      <MemoryRouter initialEntries={["/Invoices"]}>
        <LeftPanel />
      </MemoryRouter>
    );
    expect(container.debug()).toMatchSnapshot();
  });

  it("makes Invoices active", () => {
    const container = mount(
      <MemoryRouter initialEntries={["/Invoices"]}>
        <LeftPanel />
      </MemoryRouter>
    );
    expect(container.find("#Customers").hasClass("active")).toBeFalsy();
    expect(container.find("#Items").hasClass("active")).toBeFalsy();
    expect(container.find("#Invoices").hasClass("active")).toBeTruthy();
  });
});
