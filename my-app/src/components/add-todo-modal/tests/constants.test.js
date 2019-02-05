import * as constants from './../constants';

describe('modal constants', () => {
    it('should be defined', () => {
        expect(constants).toBeDefined();
    });

    it.each`
        name                              |   expected
        ${constants.CHANGE_DATA}          |   ${'CHANGE_DATA'}
        ${constants.CHANGE_IS_OPEN}       |   ${'CHANGE_IS_OPEN'}
    `('should have constant \'$name\'', ({ name, expected }) => {
        expect(name).toEqual(expected);
    });
});