import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from "./SuperDoubleRange.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    commonValue?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        commonValue,
        // min, max, step, disable, ...
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.id === "range 1" && commonValue) {
            onChangeRange
            && onChangeRange([commonValue[0], +e.currentTarget.value])
        } else {
            commonValue && onChangeRange
            && onChangeRange([+e.currentTarget.value, commonValue[1]])
        }
    }

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.sliderTrack}></div>
                    {
                        commonValue && commonValue.map((range, i) => {

                            return <input
                                key={i}
                                value={commonValue[i]}
                                id={`range ${i}`}
                                type={'range'}
                                onChange={onChangeCallback}
                                // className={finalRangeClassName}

                                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SuperDoubleRange
