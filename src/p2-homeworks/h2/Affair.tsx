import React from 'react'
import style from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback:(_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={style.affairItem}>
            <div>{props.affair.name}</div>
            <div>
                <SuperButton
                    style={{width: "40px"}}
                    onClick={deleteCallback}>
                    X
                </SuperButton>
            </div>
        </div>
    )
}

export default Affair
