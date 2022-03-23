import React from 'react'
import { MyInput } from '../UI/input/MyInput'
import { MyButton } from '../UI/button/MyButton'
import './AddTodo.scss'

export const AddTodo = ({name, changeName, description, changeDescr, addTask}) => {
  return (
    <form action="header">
        <div className="header__top">
            <MyInput onChange={changeName}  value={name} placeholder="Add task"/>
            <MyInput onChange={changeDescr}  value={description} placeholder="Description of task"/>
            <MyButton onClick={addTask} >Add task</MyButton>
        </div>
    </form>
  )
}
