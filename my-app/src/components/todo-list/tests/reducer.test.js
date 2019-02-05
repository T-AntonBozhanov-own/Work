import reducer from "../reducer";
import * as constants from '../constants';


const state = [];

describe('todo-list reducer test', () => {
    it('should be defined', () => {
        expect(reducer).toBeDefined();
    });

    it.each`
        type                           |   payload                                | state                                    | expected
        ${constants.ADD_TODO}          |   ${{id: '111', date: 111, data:'aaa'}}  | ${[]}                                    | ${[{id: '111', date: 111, data:'aaa'}]}
        ${constants.REMOVE_TODO}       |   ${111}                                 | ${[{id: '111', date: 111, data:'aaa'}]}  | ${[]}
    `('should have proper state $type', ({ type, payload, expected }) => {
        //When
        const action = {
            type: type,
            payload: payload,
        };

        expect(reducer(state, action)).toEqual(expected);
    });
});