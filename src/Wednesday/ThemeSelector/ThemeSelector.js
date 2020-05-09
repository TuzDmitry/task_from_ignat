import React from "react";
import InputRadio from "./InputRadio/InputRadio";
import style from "./ThemeSelector.module.css"

let ThemeSelector = (props) => {

    let ourThemes = props.state.themes.map(theme => <InputRadio key={theme.id}
                                                                title={theme.title}
                                                                id={theme.id}
                                                                color={theme.color}
                                                                setTheme={props.setTheme}/>)

    return (
        <div className={style.container}>
            <div>Choose next theme:</div>
            {ourThemes}
        </div>

    )
}
export default ThemeSelector;