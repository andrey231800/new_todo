import React from 'react'
import { MyButton } from '../../UI/button/MyButton';
import { MyInput } from '../../UI/input/MyInput';
import './ModalDisplay.scss'

export const ModalDisplay = ({task, active, setActive, num, edit, setEdit, name, changeName}) => {

  const match = name.match(/#\w+/);
 

  return (
    <div 
      className={active ? "modal__display active" : "modal__display"}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
        <button className="modal__close" onClick={() => {
          setActive(false);
        }}>X</button>
        <div className="modal__data">
          <div className="data_wrapper">
            {edit ? 
              <div>
                <MyInput value={name} onChange={changeName}/>
              </div>
              
              :
              <div className="name">{num+1}. {name}</div>
            }
            <div className="descr">{task.description}</div>
          </div>
          <MyButton onClick={setEdit}>{edit ? 'Enter' : 'Edit'}</MyButton>
        </div>
    </div>
  )
}
