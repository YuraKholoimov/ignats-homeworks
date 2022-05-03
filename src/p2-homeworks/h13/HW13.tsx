import React, { useState } from "react";
import {RequestsApi} from "./RequestsAPI";

import s from "./HW13.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Request() {
    const [success, setSuccess] =useState<boolean>(false)
    const [response, setResponse] = useState<string>(" ")

    const onChangeHandler = (e: any) => {
        setSuccess(e.currentTarget.checked)
    }

    const sendRequest = () => {

        RequestsApi(success)
            .then((res: any)=> {
                if (!res.ok) throw Error(res.statusText)
               return res.json()
            })
            .then(data => setResponse(data.errorText))
            .catch(error => {
                setResponse(error.message)
            })
    }

    return (
        <div className={s.block}>
            <input type="text" value={response} readOnly={true}/>
            <div><input type="checkbox" onChange={onChangeHandler}/>
                <SuperButton onClick={sendRequest}>Send</SuperButton></div>
        </div>
    )
}

export function HW13() {
    return (
        <>
            <Request/>
        </>
    );
}