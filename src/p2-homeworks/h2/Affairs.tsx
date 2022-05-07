import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

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
        <div>

            {mappedAffairs}

            <button onClick={() => onClickButtonHandler('all')}>All</button>
            <button onClick={() => onClickButtonHandler("high")}>High</button>
            <button onClick={() => onClickButtonHandler("middle")}>Middle</button>
            <button onClick={() => onClickButtonHandler("low")}>Low</button>
        </div>
    )
}

export default Affairs
