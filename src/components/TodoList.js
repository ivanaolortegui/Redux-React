import React from 'react'

const TodoList = ({
    todos,
    updateTodo,
    deleteTodo
}) => {
    console.log(todos);
    return (
      
        <ul className="list-group list-group-flush">
        {todos.map(todo => (
            <li key={todo.id} className="list-group-item">
                <input type="checkbox"
                checked={todo.checked}
                onChange={ () => updateTodo(todo)}
                />
                {todo.text}
                <button  onClick={()=> deleteTodo(todo)} 
                className="btn btn-danger">X</button>
            </li>
        ))}
    </ul>
    )
}

export default TodoList
