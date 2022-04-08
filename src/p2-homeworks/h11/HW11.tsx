import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

import s from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const minGap = 5;

    const onChangeRangeHandler = ([value1, value2]: [number, number]) => {
        setValue1(value1)
        setValue2(value2)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}

            <div className={s.wrapper}>
                <div className={s.values}>
                    <span>{value1}</span>-
                    <span>{value2}</span>
                </div>

                <SuperRange
                    value={value1}
                    onChangeRange={(value) => setValue1(value)}
                    // сделать так чтоб value1 изменялось
                />

                <SuperDoubleRange
                    commonValue={[value1, value2]}
                    onChangeRange={onChangeRangeHandler}
                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
