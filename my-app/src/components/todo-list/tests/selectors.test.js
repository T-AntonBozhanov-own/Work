import * as selectors from '../selectors';


describe('todo-list selectors test', () => {
    it('should be defined', () => {
        expect(selectors).toBeDefined();
    });

    it('should return todos', () => {
        //Given
        const state = {
            todos: [
                { one: 'one'},
                { two: 'two'},
                { three: 'three'},
                { four: 'four'},
            ]
        };

        const expected = [
            { one: 'one'},
            { two: 'two'},
            { three: 'three'},
            { four: 'four'},
        ];

        expect(selectors.getTodos(state)).toEqual(expected)
    })
})