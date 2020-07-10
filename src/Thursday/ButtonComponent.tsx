import {DetailedHTMLProps, ButtonHTMLAttributes} from "react";
import React from "react";
import s from '../Thursday/InputComponent.module.css'

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function ButtonNya(props: ButtonNyaPropsType) {
debugger
    return (

        <button {...props}
                className={s.buttonNya}
            >
            Click me
        </button>
    )
}