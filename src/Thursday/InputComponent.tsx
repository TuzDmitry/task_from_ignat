import {InputHTMLAttributes, DetailedHTMLProps} from "react";
import React from "react";
import s from '../Thursday/InputComponent.module.css'

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string };


export function InputNya(props: InputNyaPropsType) {
    const {onEnter, error, ...restProps} = props;

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode = 13) onEnter && onEnter();
    }

    return (
        <>
            <input className={s.inputNya} onKeyPress={onKeyPress}  {...restProps} type="text"/>
            {error ? <span>{error}</span> : null}
        </>
    );
};