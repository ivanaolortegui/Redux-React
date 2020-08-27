export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const SHOW_TODOS = 'SHOW_TODOS'

const url = 'http://localhost:3000/todos'
export const showTodos = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(result => dispatch({
            type: SHOW_TODOS,
            payload: result
        }))
    }
}

export const addNewTodo = (todo) => {
    return (dispatch) => {
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json())
        .then(result => dispatch(addTodo(result)))
    }
}

export const deleteDataTodo = (todo) => (dispatch) => {
    fetch(`${url}/${todo.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => dispatch(deleteTodo(todo)))
}

export const updateDataTodo = (todo) => (dispatch) => {
    const copyData = {...todo};
    copyData.checked = !copyData.checked
    fetch(`${url}/${todo.id}`,{
        method: 'PUT',
        body: JSON.stringify(copyData),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => dispatch(updateTodo(todo)))
}


export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})


export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    payload: todo
})

export const deleteTodo = (todo) => ({
    type: DELETE_TODO,
    payload: todo
})

/* export const deleteTodo = (todo) => {
    return () => {
        dispatch({
            type: DELETE_TODO,
            payload: todo
        })
    }
}
     */
