import React from 'react'

const TodoForm = ({
  onSubmit
}) => {
  return (
    <>
      <h4> Agregar TODO <span>📋</span> </h4>
      <hr />
      <form onSubmit={onSubmit}>
        <input type="text" className="form-control" placeholder="Agregar nueva tarea" />
        <button className="btn btn-primary mt-1 btn-block">Agregar</button>
      </form>
    </>
  )
}

export default TodoForm
