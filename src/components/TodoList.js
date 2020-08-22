import React from 'react'
import Todo from './Todo'


const TodoList = ({
    todos,
   /*  updateTodo,
    deleteTodo */
}) => {
    return (
        <ul className="list-group list-group-flush">
        {todos.map(todo => (
          <Todo  
          key={todo.id} 
          todo={todo}
           />
        ))}
    </ul>
    )
}

export default TodoList
