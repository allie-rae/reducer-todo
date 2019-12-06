import React, { useState } from 'react';
import ClearTodo from './ClearTodo';

const TodoForm = (props) => {

    const [todoText, setTodoText] = useState("")

    const handleChanges = e => {
        setTodoText(e.target.value)
    }

    return (
        <form className="todoForm"
            onSubmit={(e) => {
                e.preventDefault()
                props.dispatch({
                    type: 'ADD_TODO',
                    payload: { item: todoText, completed: false, id: new Date() }
                })
                setTodoText("")
            }}>
            <input
                placeholder="Add a todo"
                value={todoText}
                name="todoText"
                type="text"
                onChange={handleChanges}
            />
            <button type="submit" 
                    >Submit</button>
            <ClearTodo 
                todoList={props.todoList}
                dispatch={props.dispatch} />
        </form>
    )
}

export default TodoForm;