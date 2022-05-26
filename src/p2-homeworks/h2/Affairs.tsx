import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: AffairType [],
    setFilter: (filter: FilterType) => void,
    deleteAffairCallback: (id: number) => void
}




function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a.id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const onClickButtonHandler = (FilterType: FilterType) => {props.setFilter(FilterType)} // need to fix



    return (
        <div className={s.body}>
            <div className={s.gridAffairs}> {mappedAffairs}</div>
            <div className={s.gridButtons}>
                <button className={s.buttonFilter} onClick={() => onClickButtonHandler('all')}>All</button>
                <button className={s.buttonFilter} onClick={() => onClickButtonHandler("high")}>High</button>
                <button className={s.buttonFilter} onClick={() => onClickButtonHandler("middle")}>Middle</button>
                <button className={s.buttonFilter} onClick={() => onClickButtonHandler("low")}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
