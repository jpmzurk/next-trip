import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { DeparturesBody } from "../TableModules";
import "../../../../enzymeConfig";

describe("TableBody should render a mapped list", () => {
  const props = {
    departures: [
      { Route: "3", Description: "Rosedale/Rapid", DepartureText: "3 mins" },
      { Route: "3", Description: "Rosedale/Rapid", DepartureText: "12 mins" },
      { Route: "3", Description: "Rosedale/Rapid", DepartureText: "6:44" },
      { Route: "3", Description: "Rosedale/Rapid", DepartureText: "6:56" },
    ],
  };

  it("should match snapshot", () => {
    const tableBody = shallow(<DeparturesBody {...props} />);
    expect(shallowToJson(tableBody)).toMatchSnapshot();
  });
});
