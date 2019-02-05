import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
    todo: {
        date: 111,
        data: 'aaa',
    }
};

const propTypes = {
    todo: PropTypes.shape({
        date: PropTypes.number,
        data: PropTypes.string,
    }),
};

class TodoRow extends Component {
    render() {
        const {
            todo
        } = this.props;

        return (
            <div className="todo-row-wrapper">
                <span className="todo-row-wrapper__date">
                    {todo.date}
                </span>
                <span className="todo-row-wrapper__data">
                    {todo.data}
                </span>
                <span className="todo-row-wrapper__controls">
                    <input type="checkbox"/>
                    <span>remove</span>
                </span>
            </div>
        )
    }
}

TodoRow.propTypes = propTypes;
TodoRow.defaultProps = defaultProps;

export default TodoRow;
