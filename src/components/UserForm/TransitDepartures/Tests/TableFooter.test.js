import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { DeparturesFooter } from "../TableModules";
import "../../../../enzymeConfig";

describe("TableFooter should switch between expand and collapse depending on state", () => {
  const mockClick = jest.fn();
  const props = {
    handleExpand: mockClick,
    isExpanded: true,
  };

  it("should match snapshot", () => {
    const tableFooter = shallow(<DeparturesFooter {...props} />);

    expect(shallowToJson(tableFooter)).toMatchSnapshot();
  });

  it("should show collapse if state is true", () => {
    const tableFooter = shallow(<DeparturesFooter {...props} />);
    expect(tableFooter.find('[name="collapse"]').exists()).toBeTruthy();

    const button = tableFooter.find('[name="iconButton"]');
    button.simulate("click");
    expect(mockClick).toHaveBeenCalled();
  });

  it("should show expand if state is false", () => {
    const tableFooter = shallow(
      <DeparturesFooter handleExpand={mockClick} isExpanded={false} />
    );
    expect(tableFooter.find('[name="expand"]').exists()).toBeTruthy();
  });
});
