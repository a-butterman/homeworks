import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (id: number) => {props.deleteAffairCallback(id)}// need to fix

    return (
        <div className={s.body} key={props.affair.id}>
            <span>{props.affair.name}</span>
            <span
                className={ props.affair.priority === 'high' ? s.priorityHigh : ''
                         || props.affair.priority === 'middle' ? s.priorityMiddle : ''
                         || props.affair.priority === 'low' ? s.priorityLow : ''
            }
            >
                [ {props.affair.priority} ]
            </span>

            <button className={s.buttonDel} onClick={() => deleteCallback(props.affair.id)}>✘</button>
        </div>
    )
}

export default Affair
