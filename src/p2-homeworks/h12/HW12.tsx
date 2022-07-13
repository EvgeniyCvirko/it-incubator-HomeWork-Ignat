import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);
    const dispatch = useDispatch()
    const onChangeOption = (value: string) => {
        dispatch(changeThemeC(value))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div style={{marginLeft: 10}}>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeOption}/>
                {/*<SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeOption}/>*/}
                {/*SuperSelect or SuperRadio*/}
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
