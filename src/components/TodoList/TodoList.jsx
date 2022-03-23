import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList = ({todos, removeTodo, edit, setEdit}) => {


  return (
    <div className="todoList">
        {todos.map((task, num) => {
         return <TodoItem 
                edit={edit}
                setEdit={setEdit}
                task={task} 
                removeTodo={removeTodo} 
                key={task.id} 
                num={num}
              />
        })}
        {todos.map(todo=> {
          return todo.name.match(/#\w+/g) ? <div>asfas</div> : <div key={todo.id}>Нету</div>
        })}
    </div>
  )
}
