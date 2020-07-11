import {InputHTMLAttributes, DetailedHTMLProps} from "react";
import React from "react";
import s from '../Thursday/InputComponent.module.css'
import style from "../Monday/ComponentSpINBut/Component3.module.css";

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string };


export function InputNya(props: InputNyaPropsType) {
    const {onEnter, error, ...restProps} = props;

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode = 13) onEnter && onEnter();
    }

    let classNameInput = error ? `${style.error} ${style.inp}` : `${style.inp}`;
debugger
    return (
        <>
            <input className={classNameInput} onKeyPress={onKeyPress}  {...restProps} type="text"/>
            {/*<input className={s.inputNya} onKeyPress={onKeyPress}  {...restProps} type="text"/>*/}
            {error ? <div>{error}</div> : null}
        </>
    );
};