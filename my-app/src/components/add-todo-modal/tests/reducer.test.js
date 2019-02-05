import reducer from "../reducer";
import * as constants from '../constants';

const state = {
    data: '',
    isOpen: false,
};

describe('modal reducer test', () => {
    it('should be defined', () => {
        expect(reducer).toBeDefined();
    });

    it.each`
        type                           |   payload             | state                            | expected
        ${constants.CHANGE_DATA}       |   ${'aaaaaa'}         | ${{data: '', isOpen: false}}     | ${{data: 'aaaaaa', isOpen: false}}
        ${constants.CHANGE_IS_OPEN}    |   ${false}            | ${{data: '', isOpen: true}}      | ${{data: '', isOpen: false}}
        ${constants.CHANGE_IS_OPEN}    |   ${true}             | ${{data: '', isOpen: false}}     | ${{data: '', isOpen: true}}
    `('should have proper state $type', ({ type, payload, expected }) => {
        //When
        const action = {
            type: type,
            payload: payload,
        };

        expect(reducer(state, action)).toEqual(expected);
    });
});