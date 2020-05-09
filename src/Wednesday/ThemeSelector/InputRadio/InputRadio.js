import React from 'react';
import style from './InputRadio.module.css'

const InputRadio = (props) => {
    let onPress = (color) => {
        // let a = e.currentTarget.value
        props.setTheme(color)
    }

    let divsStyle = {
        color:props.color
    };
    return (
        <label className={style.textLabel} style={divsStyle}>
            <input name='theme' type="radio" id={props.id} onClick={()=>onPress(props.color)}/>
            {props.title}
        </label>
    )
}
export default InputRadio