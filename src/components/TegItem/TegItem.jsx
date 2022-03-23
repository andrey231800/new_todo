import React from 'react'
import './TegItem.scss'

export const TegItem = ({teg, removeTeg}) => {
    const regEx = /#+/g;
    const tegName = teg.tegName;

    return (
            <div className="tabContent">
                    <div 
                        className="tabContent__name"
                    >
                        {tegName.match(regEx) ? '#' + tegName.replace(regEx, '') : '#' + tegName}
                    </div> 
                    <button className="tabContent__btn" onClick={() => removeTeg(teg.id)}>
                        X
                    </button>
            </div>
    )
}
