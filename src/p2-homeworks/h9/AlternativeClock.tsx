import React from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


function AlternativeClock() {
    const [id, setId] = React.useState<number>()
    let [num, setNum] = React.useState<number>(1)

    const start = () => {
        let id: number = window.setInterval(() => {
            setNum(num++)
        }, 1000)
        setId(id)
    }
    const stop = () => clearInterval(id)
    const reset = () => {
        stop()
        setNum(0)
    }

    return (
        <div>
            <div style={{fontSize: "32px"}}>{num}</div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
            <SuperButton onClick={reset}>reset</SuperButton>

        </div>
    )
}

export default AlternativeClock
