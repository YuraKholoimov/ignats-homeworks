import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState(new Date().toLocaleTimeString())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => clearInterval(timerId)

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date().toLocaleTimeString())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => setShow(true)
    const onMouseLeave = () => setShow(false)

    const stringTime = `${date}`// fix with date
    const stringDate = `${new Date().toLocaleDateString()}` // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
