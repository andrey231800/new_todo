import React, { useState } from 'react'
import { ModalWrapper } from '../Modal/ModalWrapper/ModalWrapper'
import './TodoItem.scss'

export const TodoItem = ({task, removeTodo, num, edit, setEdit}) => {
    const [active, setActive] = useState(false)
    const [name, setName] = useState(task.name);

    const changeName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    return (
        <div className="task" style={{cursor: 'pointer'}}>
            <div className="content" onClick={() => setActive(true)}>
                <div className="content__name">
                    <span>{num+1}</span>. {name}
                </div>
                <div className="content__descr">{task.description}</div>
            </div>
            <button className="content__btn" onClick={() => removeTodo(task.id)}>
                X
            </button>
           <ModalWrapper 
                active={active} 
                setActive={setActive} 
                task={task} 
                num={num}
                edit={edit}
                setEdit={setEdit}
                name={name}
                changeName={changeName}
            />
        </div>
    )
}
