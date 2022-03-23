import React from 'react'
import { MyButton } from '../UI/button/MyButton'
import { MyInput } from '../UI/input/MyInput'
import './AddTeg.scss'

export const AddTeg = ({changeTeg, addNewTeg, inputTeg}) => {
  return (
    <form action="" className="header">
        <div className="header__bottom">
            <MyInput onChange={changeTeg} value={inputTeg} placeholder="Enter #teg name"/>
            <MyButton onClick={addNewTeg}>Add #teg</MyButton>
        </div>
    </form>
  )
}
