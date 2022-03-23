import React from 'react'
import { AddTeg } from '../AddTeg/AddTeg'
import { AddTodo } from '../AddTodo/AddTodo'
import './Header.scss'

export const Header = ({name, changeName, changeDescr, addTask, description, addNewTeg, changeTeg, inputTeg}) => {
  return (
        <div>
          <h1>Notes list</h1>
              <AddTodo 
                name={name}
                changeDescr={changeDescr}
                changeName={changeName} 
                addTask={addTask}
                description={description}
              />
              <AddTeg 
                addNewTeg={addNewTeg} 
                changeTeg={changeTeg} 
                inputTeg={inputTeg}
              />
        </div>
  )
}
