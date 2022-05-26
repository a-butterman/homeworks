import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    onKeyDownEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ( {name, setNameCallback, addUser, error, totalUsers, onKeyDownEnter} ) => {// деструктуризация пропсов

    const inputClass = error ? s.error : s.input// need to fix with (?:)
    const errorClass = error ? s.errorText : ''
    const errorBtn = name === '' ? true : false

    return (
        <div>
                <input value={name}
                       onChange={setNameCallback}
                       onKeyDown={onKeyDownEnter}
                       className={inputClass}
                />
            <button className={s.buttonAdd} onClick={addUser} disabled={errorBtn}>add</button>
            <span className={s.spanUsers} >{totalUsers}</span>
            <div className={errorClass}>{error}</div>
        </div>
    )
}

export default Greeting
