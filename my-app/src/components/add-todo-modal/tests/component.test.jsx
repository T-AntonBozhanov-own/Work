import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Component from './../component';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('todo-list component test', () => {
    it('should be define', () => {
        expect(Component).toBeDefined();
    });
});