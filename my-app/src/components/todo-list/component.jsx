import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoRow from '../todo-row/index';
import AddModal from '../add-todo-modal';

const defaultProps = {
    todos: []

};

const propTypes = {
    todos: PropTypes.array,
    addTodo: PropTypes.func,
};

class TodoList extends Component {

    openModal = () => {
        const { openAddModal } = this.props;

        openAddModal(true);
    };

    render() {
        const {
            todos,
            addTodo,
        } = this.props;

        const list =
            Boolean(todos.length) && todos.map( (item, index) => (
                <TodoRow
                    key={index}
                    todo={item}
                />
            ));

        return (
            <>
                <div className="todo-list-wrapper">
                    { list }
                </div>
                <span className="content__add-button" onClick={this.openModal}>
                     add todo
                </span>
                <AddModal
                    addTodo={addTodo}
                />

            </>
        )
    }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
