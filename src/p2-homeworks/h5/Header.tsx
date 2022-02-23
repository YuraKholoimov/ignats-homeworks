import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from "./header.module.css"

type btnType = {
    to: string
    title: string
    active: boolean
}

function Header() {
    const [isShow, setIsShow] = useState(false)
    const [btns, setBtns] = useState([
        {to: "pre-junior", title: "Pre-junior", active: true},
        {to: "pre-junior-plus", title: "Pre-junior+", active: false},
        {to: "pre-junior-minus", title: "Pre-junior-", active: false}
    ])

    const setActive = (b: btnType) => {
        btns.forEach(e => e.active = false)
        setBtns([...btns.map(el => el.to == b.to ? {...el, active: true} : el)])
    }

    return (
        <div className={s.menu}>
            <div className={s.navBar}>
                <button className={s.btnMenu}
                        onClick={() => setIsShow(!isShow)}>menu
                </button>
                {isShow
                    && btns.map((b, index) => {
                        return <button key={index}
                                       className={s.btnPage}>
                            <NavLink
                                to={b.to}
                                className={b.active ? `${s.active}` : ""}
                                onClick={() => setActive(b)}
                            >{b.title}
                            </NavLink>
                        </button>
                    })
                }
            </div>
        </div>
    )
}

export default Header
