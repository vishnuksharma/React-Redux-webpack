import React from 'react';
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoListItems = ({todos, toggleTodo}) => (
    <ul>
        {
            todos.map(todo => 
                <Todo 
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
                />
            )
        }
        
    </ul>
);

TodoListItems.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoListItems;