import * as selectors from '../selectors';


describe('modal selectors test', () => {
    it('should be defined', () => {
        expect(selectors).toBeDefined();
    });

    it('should return data', () => {
        //Given
        const state = {
            modal: {
                data: 'aaaa',
                isOpen: true,
            }
        };

        const expected = 'aaaa';

        expect(selectors.getData(state)).toEqual(expected)
    });

    it('should return isOpen', () => {
        //Given
        const state = {
            modal: {
                data: 'aaaa',
                isOpen: true,
            }
        };

        const expected = true;

        expect(selectors.getIsOpen(state)).toEqual(expected)
    });
})