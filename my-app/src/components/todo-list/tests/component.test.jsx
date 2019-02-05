import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Component from './../component';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const openModalStub = sinon.stub();
jest.mock('../../todo-row', () => () => <div className="row"/>);
jest.mock('../../add-todo-modal', () => () => <div className="modal"/>);

const commonProps = {
    todos: [{
        date: 1111,
        data: 'aaaa',
    }],
    openAddModal: openModalStub
};

describe('todo-list component test', () => {
    it('should be define', () => {
        expect(Component).toBeDefined();
    });

    it.each`
    className                        | quantity
    ${'.todo-list-wrapper'}          | ${1}
    ${'.content__add-button'}        | ${1}
    `('class $className should be defined', ({className, quantity}) => {
        //When
        const wrapper = shallow(<Component {...commonProps} />);

        //Then
        expect(wrapper.find(className).length).toBe(quantity);
    });

    it('Add todo click test', () => {
        //When
        const wrapper = shallow(<Component {...commonProps} />);
        wrapper.find('.content__add-button').simulate('click');

        expect(openModalStub.calledOnce).toBeTruthy();
    })
});