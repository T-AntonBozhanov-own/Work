import * as constants from './constants';

export const addTodo = todo => ({
    type: constants.ADD_TODO,
    payload: todo,
});

export const removeTodo = id => ({
    type: constants.REMOVE_TODO,
    payload: id,
});


