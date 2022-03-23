import React, { useState } from 'react'
import { ModalDisplay } from '../ModalDisplay/ModalDisplay'
import './ModalWrapper.scss'

export const ModalWrapper = ({task, active, setActive, num, edit, setEdit, name, changeName}) => {

  return (
    <div className={active ? "modal__wrapper active" : "modal__wrapper"} onClick={() => setActive(false)}>
        <ModalDisplay 
          task={task} 
          active={active} 
          setActive={setActive} 
          num={num}
          edit={edit}
          setEdit={setEdit}
          changeName={changeName}
          name={name}
        />
    </div>
  )
}
