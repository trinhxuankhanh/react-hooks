import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {

    const { todos, onTodoClick } = props

    const handleClick = todo => {
        if(onTodoClick) {
            onTodoClick(todo)
        }
    }

    return ( 
        <ul>
            {
                todos.map(todo => <li key={todo.id} onClick={() => handleClick(todo.id)}>{todo.title}</li>)
            }
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
}

TodoList.defaultProgs = {
    todos: [],
    onTodoClick: null
}
 
export default TodoList;