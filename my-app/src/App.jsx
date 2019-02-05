import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list';

class App extends Component {
    render() {
        return (
            <div className="page">
                <header className="page__header">
                    <p>
                        TODO list
                    </p>
                </header>
                <div className="page-content content">
                    <div className="content__todo-list">
                        <TodoList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;