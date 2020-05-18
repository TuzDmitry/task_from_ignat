/////////////
import style1 from '../Wednesday/Wednesday.module.css'


export const SET_STYLE_THEME = 'Task_Ignat/SettingsReducer/SET_STYLE';

let initialState = {
    theme_style: {
        themes: [
            {id: 0, title: "DARK", color: "brown"},
            {id: 1, title: "GREEN", color: "green"},
            {id: 2, title: "LIGHT", color: "yellow"}
        ],
        choisedTheme: "green",
        ///////////
        selectedStyle: style1
        ///////////
    }
}

let SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STYLE_THEME:
            ///добавить еще один кейс , который в завис-ти от action.title будет мешать Selected style

            return {...state, theme_style: {...state.theme_style, choisedTheme: action.color}}
        default:
            return state;
    }
}

/////Actions CREATORS
export const setStyleTheme = (color) => ({type: SET_STYLE_THEME, color: color})

export default SettingsReducer;