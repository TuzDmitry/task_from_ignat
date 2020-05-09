export const SET_STYLE_THEME = 'Task_Ignat/SettingsReducer/SET_STYLE';

let initialState = {
    theme_style: {
        themes: [
            {id: 0, title: "DARK", color: "brown"},
            {id: 1, title: "GREEN", color: "green"},
            {id: 2, title: "LIGHT", color: "yellow"}
        ],
        choisedTheme: "green"
    }
}

let SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STYLE_THEME:
            // let a=action.id

            // let newTheme=state.theme_style.themes.filter(theme=>theme.id===action.id)
            // let b=(...newTheme)

            let a={...state, theme_style: {...state.theme_style, choisedTheme: action.color}}
            return a
        default:
            return state;
    }
}

/////Actions CREATORS
export const setStyleTheme = (color) => ({type: SET_STYLE_THEME, color: color})

export default SettingsReducer;