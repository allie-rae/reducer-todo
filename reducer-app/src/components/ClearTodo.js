import React from 'react';

const ClearTodo = (props) => {
    return <button
        type="button"
        className="clearTodos"
        onClick={(e) => {
            e.preventDefault()
            props.dispatch({ type: 'REMOVE_TODO' })}}
        >
            Clear Todos
    </button>
}

export default ClearTodo;