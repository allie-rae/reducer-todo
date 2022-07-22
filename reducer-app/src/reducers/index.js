

// let action1 = {type: 'ADD_TODO', payload: {item: text, completed: false, id: new Date()}}

export let initialState = {

    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'This is now a list',
            completed: false,
            id: 3892987582
        },
    ]
}


export function basicReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] }
        case 'TOGGLE_TODO': 
                return { ...state, todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                }) }
        case 'REMOVE_TODO':
            return {...state, todos: [...state.todos.filter(todo => !todo.completed)]}
        default:
            return state;
    }
}