import * as actions from './../actions';
import * as constants from './../constants';

describe('modal actions', () => {
    it('should be defined', () => {
        expect(constants).toBeDefined();
        expect(actions).toBeDefined();
    });

    it.each`
        name                       |   params                       |   expected
        ${'onChange'}              |   ${'aaaa'}                    |   ${{ type: constants.CHANGE_DATA, payload: 'aaaa' }}
        ${'changeIsOpen'}          |   ${false}                     |   ${{ type: constants.CHANGE_IS_OPEN, payload: false }}
        ${'changeIsOpen'}          |   ${true}                      |   ${{ type: constants.CHANGE_IS_OPEN, payload: true }}
    `('should have action \'$name\'', ({ name, params, expected }) => {
        expect(actions[name](params)).toEqual(expected);
    });
});