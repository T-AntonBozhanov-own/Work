import { combineReducers } from 'redux';
import todosReducer from './components/todo-list/reducer';
import modalReducer from './components/add-todo-modal/reducer';


const rootReducer = combineReducers({
    todos: todosReducer,
    modal: modalReducer,
});

export default rootReducer;
