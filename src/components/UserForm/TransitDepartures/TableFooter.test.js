import React from "react";
import renderer from "react-test-renderer";
import { TableFooter } from "./TableModules";
import { cleanup, fireEvent, render } from "@testing-library/react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";



it("Icons flip when boolean state flips", () => {
  const { queryByLabelText, getByLabelText } = render(
    <TableFooter labelOn="On" labelOff="Off" />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});




// test('Icons flip when boolean state flips', () => {

//     const component = renderer.create(
//       <TableFooter handleExpand={} isExpanded={false}/>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();

//     // manually trigger the callback
//     tree.props.onClick();
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();

//   });
