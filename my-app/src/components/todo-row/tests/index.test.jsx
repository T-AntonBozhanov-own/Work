import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Component from './../';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const removeTotoStub = sinon.stub();

const commonProps = {
    todo: {
        date: 1111,
        data: 'aaaa',
    },
    removeTodo: removeTotoStub,
};

describe('todo-row test', () => {
    it('should be define', () => {
        expect(Component).toBeDefined();
    });

    it.each`
    className                        | quantity
    ${'.todo-row-wrapper'}           | ${1}
    ${'.todo-row-wrapper__date'}     | ${1}
    ${'.todo-row-wrapper__data'}     | ${1}
    ${'.todo-row-wrapper__controls'} | ${1}
    `('class $className should be defined', ({className, quantity}) => {
        //When
        const wrapper = shallow(<Component {...commonProps} />);

        //Then
        expect(wrapper.find(className).length).toBe(quantity);
    });

    it('DONE click test', () => {
        //When
        const wrapper = shallow(<Component {...commonProps} />);
        wrapper.find('.todo-row-wrapper__controls').simulate('click');

        expect(removeTotoStub.calledOnce).toBeTruthy();
    })
});