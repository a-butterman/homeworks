import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div>
            <input className='hidden__checkbox' type='checkbox' id='menu'/>
            <span className='menu'>
                <NavLink to={'./pre-junior'}>PRE JUNIOR</NavLink>
                <NavLink to={'./junior'}>JUNIOR</NavLink>
                <NavLink to={'./junior-Plus'}>JUNIOR PLUS</NavLink>
            </span>
            <label className='hidden__button' htmlFor='menu'>☰</label>
        </div>
    )
}

export default Header
