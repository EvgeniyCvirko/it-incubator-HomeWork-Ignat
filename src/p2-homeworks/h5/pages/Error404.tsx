import React from 'react'
import s from './../NavLink.module.css'

function Error404() {
    return (
        <div>
            <div className={s.number}>404</div>
            <div className={s.pageNotFound}>Page not found!</div>
            <div className={s.image}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
