import React from "react";
import { shallow } from 'enzyme';
import Modal from "./Modal"

const setUp = (props={}) => {
    const component = shallow(<Modal {...props} />)
    return component;
};

let component;
beforeEach(() => {
    component = setUp();
});

it('should render without errors', () => {
    const wrapper = component.find(".content");
    expect(wrapper.length).toBe(1);
});



it('should render without errors', () => {
    const wrapper = component.find(".actions");
    expect(wrapper.length).toBe(1);
});