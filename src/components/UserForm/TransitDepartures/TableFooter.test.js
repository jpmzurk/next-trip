import React from "react";
import { shallow } from "enzyme";
import { DeparturesFooter } from "./TableModules";
import { shallowToJson } from 'enzyme-to-json';
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });
describe("DeparturesFooter should between expand and collapse  ", () => {
  const mockClick = jest.fn();

  it("should match snapshot", () => {
    const tableFooter = shallow(
      <DeparturesFooter handleExpand={mockClick} isExpanded={true} />
    );

    expect(shallowToJson(tableFooter)).toMatchSnapshot();
  })

  it("should show collapse", () => {
    const tableFooter = shallow(
      <DeparturesFooter handleExpand={mockClick} isExpanded={true} />
    );
    expect(tableFooter.find('[name="collapse"]').exists()).toBeTruthy();

    const button = tableFooter.find('[name="iconButton"]');
    button.simulate("click");
    expect(mockClick).toHaveBeenCalled();
  });

  it("should show expand", () => {
    const tableFooter = shallow(
      <DeparturesFooter handleExpand={jest.fn()} isExpanded={false} />
    );

    expect(tableFooter.find('[name="expand"]').exists()).toBeTruthy();
  });
});