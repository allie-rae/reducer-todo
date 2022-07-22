import React, { useReducer } from 'react';
import { initialState, basicReducer } from './reducers';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


function App() {

  const [todoList, dispatch] = useReducer(basicReducer, initialState)

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList
        todoList={todoList}
        dispatch={dispatch} />
      <TodoForm
        dispatch={dispatch}
        todoList={todoList} />
    </div>
  );
}

export default App;
