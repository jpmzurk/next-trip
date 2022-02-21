import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallowToJson } from 'enzyme-to-json';
import { DeparturesHead } from "../TableModules";

configure({ adapter: new Adapter() });

describe('Table header renders properly', () => {
    const props = {
        stopID : {
            StopLabel : 'Franklin Ave Station',
            StopID: '#5748'
        }
    }
    it('should match snapshot', () => {
        const tableHeader = shallow(<DeparturesHead {...props} />);
        expect(shallowToJson(tableHeader)).toMatchSnapshot();
    })
})