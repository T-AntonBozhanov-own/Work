import * as constants from './../constants';

describe('todo-list constants', () => {
    it('should be defined', () => {
        expect(constants).toBeDefined();
    });

    it.each`
        name                           |   expected
        ${constants.ADD_TODO}          |   ${'ADD_TODO'}
        ${constants.REMOVE_TODO}       |   ${'REMOVE_TODO'}
    `('should have constant \'$name\'', ({ name, expected }) => {
        expect(name).toEqual(expected);
    });
});