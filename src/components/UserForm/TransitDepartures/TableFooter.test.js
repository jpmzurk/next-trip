import React from "react";
import { shallow } from 'enzyme';
import { DeparturesFooter } from "./TableModules";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("Icons flip when boolean state flips", () => {
  const mockClick = jest.fn();

  
  //expect footer to = snapshot

  it('should show collapse', () => {
    
    const footer = shallow(<DeparturesFooter handleExpand={mockClick} isExpanded={true} />);

    expect(footer).toMatchSnapshot()

    expect(footer.find('[name="collapse"]').exists()).toBeTruthy();

    const button = footer.find('[name="iconButton"]')
    button.simulate("click")
    expect(mockClick).toHaveBeenCalled();
  });

  it('should show expand', () => {
    const footer = shallow(<DeparturesFooter handleExpand={jest.fn()} isExpanded={false} />);

    expect(footer.find('[name="expand"]').exists()).toBeTruthy()
  })

});

// expect(enzymeToJson(cardItem)).toMatchSnapshot();



