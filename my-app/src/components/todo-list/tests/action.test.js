import * as actions from './../actions';
import * as constants from './../constants';

describe('todo-list actions', () => {
    it('should be defined', () => {
        expect(constants).toBeDefined();
        expect(actions).toBeDefined();
    });

    it.each`
        name                       |   params                                  |   expected
        ${'addTodo'}               |   ${{param1: 1, param2: 2}}               |   ${{ type: constants.ADD_TODO, payload: {param1: 1, param2: 2} }}
        ${'removeTodo'}            |   ${111}                                  |   ${{ type: constants.REMOVE_TODO, payload: 111 }}
    `('should have action \'$name\'', ({ name, params, expected }) => {
        expect(actions[name](params)).toEqual(expected);
    });
});