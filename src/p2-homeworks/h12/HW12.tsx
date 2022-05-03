import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC,} from "./bll/themeReducer";

const themes = ['dark', 'red', 'blue', 'yellow', 'some'];

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.theme.color)
    const dispatch = useDispatch()

    const onChangeCallback = (option: string) => {
        dispatch(changeThemeC(option))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <SuperSelect options={themes} onChangeOption={onChangeCallback} />

            <hr/>
        </div>
    );
}

export default HW12;
