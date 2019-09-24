import React from 'react';
import checkPropTypes from 'check-prop-types';
import StreamDelete from './StreamDelete';
import { shallow } from 'enzyme';


const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

 const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};


describe('Stream Delete Button'), () => {
    describe('checing proptypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                buttonText: "Example Button Text",
                emitEvent: () => {

                }
            };
            const propsError = checkProps(Button, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('renders', () => {
        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            };
            wrapper = shallow(<StreamDelete {...props} />);
        });

        it('should render a button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            StreamDelete.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })
    });
}

