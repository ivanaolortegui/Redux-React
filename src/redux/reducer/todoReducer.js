import { ADD_TODO, DELETE_TODO, UPDATE_TODO, SHOW_TODOS } from "../actions/todoActions";

const initialState = {
    /* todos: [
        { text: 'Agragar nuevo componente',
            id: '123',
            checked: false
        }
    ] */
    // todos: JSON.parse(localStorage.getItem("todos")) || []
    todos: []
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    action.payload,
                    ...state.todos
                ]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return todo.id !== action.payload.id
                })
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (action.payload.id === todo.id) {
                        return {
                            ...todo,
                            checked: !todo.checked
                        }
                    }
                    return todo
                })
            }

        default:
            return state;
    }

}
//export default todoReducer;