import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallowToJson } from 'enzyme-to-json';
import { DeparturesFooter } from "../TableModules";

configure({ adapter: new Adapter() });
describe("DeparturesFooter should switch between expand and collapse depending on state", () => {
  const mockClick = jest.fn();
  const props = {
    handleExpand: mockClick,
    isExpanded : true
  }

  it("should match snapshot", () => {
    const tableFooter = shallow(
      <DeparturesFooter {...props}/>
    );

    expect(shallowToJson(tableFooter)).toMatchSnapshot();
  })

  it("should show collapse", () => {
    const tableFooter = shallow(
      <DeparturesFooter {...props} />
    );
    expect(tableFooter.find('[name="collapse"]').exists()).toBeTruthy();

    const button = tableFooter.find('[name="iconButton"]');
    button.simulate("click");
    expect(mockClick).toHaveBeenCalled();
  });

  it("should show expand", () => {
    const tableFooter = shallow(
      <DeparturesFooter handleExpand={mockClick} isExpanded={false} />
    );

    expect(tableFooter.find('[name="expand"]').exists()).toBeTruthy();
  });
});