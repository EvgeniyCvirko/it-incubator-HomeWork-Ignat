import React, {useState} from 'react'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from "./NavLink.module.css"

function Header() {
    const [openBurger, setOpenBurger] = useState<boolean>(false)
    const burgerOpen = () => {
        openBurger ? setOpenBurger(false) : setOpenBurger(true)
    }
    return (
        <div className={s.header}>
            <div className={openBurger ? s.openBurger : s.burger} onClick={burgerOpen}>
                <span></span>
            </div>
            <div className={openBurger ? s.navlink : s.openNavlink}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.pre_junior} activeClassName={s.active}>pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.junior} activeClassName={s.active}>junior</NavLink>
                <NavLink to={PATH.JUNIOR_Plus} className={s.junior_plus} activeClassName={s.active}>junior+</NavLink>
            </div>
        </div>
    )
}

export default Header
