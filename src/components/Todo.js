import React from 'react'

import { useDispatch } from 'react-redux';
import {  updateTodo, deleteTodo } from '../redux/actions/todoActions';


const Todo = ({
    todo
}) => {
    const dispatch = useDispatch()
    return (
        <li className="list-group-item">
        <input type="checkbox"
        checked={todo.checked}
        onChange={ () => dispatch(updateTodo(todo))}
        />
        {todo.text}
        <button  onClick={()=> dispatch(deleteTodo(todo))} 
        className="btn btn-danger">X</button>
    </li>
    )
}

export default Todo
