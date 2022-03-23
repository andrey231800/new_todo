import React from 'react'
import { TegItem } from '../TegItem/TegItem'
import './TegList.scss'

export const TegList = ({tegArr, removeTeg}) => {
  return (
    <div className="tegList">
        {tegArr.map(teg => {
            return <TegItem teg={teg} key={teg.id} removeTeg={removeTeg}/>
        })}
    </div>
  )
}
