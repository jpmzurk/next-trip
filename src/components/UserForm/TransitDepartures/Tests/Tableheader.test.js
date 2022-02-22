import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { DeparturesHeader } from "../TableModules";
import "../../../../enzymeConfig";

describe("Table header renders properly", () => {
  const mockProps = {
    stopID: {
      StopLabel: "Franklin Ave Station",
      StopID: "#5748",
    },
  };
  let tableHeader;

  beforeEach(() => {
    tableHeader = shallow(<DeparturesHeader {...mockProps} />);
  });

  it("should match snapshot", () => {
    expect(shallowToJson(tableHeader)).toMatchSnapshot();
  });

  it("should render subheaderClass", () => {
    expect(tableHeader.find(".tableSubheader").exists()).toBeTruthy();
  });
});
