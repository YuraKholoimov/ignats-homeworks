import React from 'react'


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
            {num}
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default AlternativeClock
