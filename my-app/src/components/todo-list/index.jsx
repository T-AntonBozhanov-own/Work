import { connect } from 'react-redux';

import * as todoSelectors from './selectors';
import * as todoActions from './actions';
import * as modalActions from './../add-todo-modal/actions';
import component from './component';


const mapStateToProps = state => ({
   todos: todoSelectors.getTodos(state)
});

const mapDispatchToProps = {
    addTodo: todoActions.addTodo,
    removeTodo: todoActions.removeTodo,
    setDone: todoActions.setDone,
    openAddModal: modalActions.changeIsOpen,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component);