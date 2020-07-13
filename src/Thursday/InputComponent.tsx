import {InputHTMLAttributes, DetailedHTMLProps, CSSProperties} from "react";
import React from "react";


export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string };

export function InputNya(props: InputNyaPropsType) {
    const {onEnter, error, ...restProps} = props;

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) onEnter && onEnter();
    }

    let St: CSSProperties = error ?
        {marginLeft: 10, marginRight: 10, borderColor: 'red'} :
        {marginLeft: 10, marginRight: 10};

    let errorStyle: CSSProperties = {color: 'red', fontWeight: 'bold'}

    return (
        <>
            <input style={St} onKeyPress={onKeyPress}  {...restProps} type="text"/>
            {/*<input className={s.inputNya} onKeyPress={onKeyPress}  {...restProps} type="text"/>*/}
            {error ? <div style={errorStyle}>{error}</div> : null}
        </>
    );
};