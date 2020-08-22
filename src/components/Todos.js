import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo, deleteTodo } from '../redux/actions/todoActions';
import { useForm } from '../hooks/useForm';
import TodoForm from './TodoForm';
import '../styles.css'
import TodoList from './TodoList';

const Todos = ( /* {
    todos,
    addTodo,
    updateTodo,
    deleteTodo
}  */) => {

    const { todos } = useSelector(state => state.todo)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const text = event.target[0].value

        dispatch(addTodo({
            text,
            id: new Date().getTime(),
            checked: false
        }))
        event.target[0].value = ''
    }
    return (
        <div>
            <h1> Todo {todos.length}</h1>
            <div className="row">
                <div className="col-7">
                    <TodoList 
                    todos={todos} 
                    /* updateTodo={updateTodo} 
                    deleteTodo={deleteTodo}  */
                    />
                </div>
                <div className="col-5">
                    <TodoForm onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

/* const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer.todos

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo)),
        updateTodo: (todo) => dispatch(updateTodo(todo)),
        deleteTodo: (todo) => dispatch(deleteTodo(todo))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Todos) */
export default Todos
