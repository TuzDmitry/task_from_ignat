import {API, tryCatch} from "../dal/api";
import store from "./reduxStore";

export const CHANGE_SUCCESS = "task_ignat_git/wendesdayReducer/CHANGE_SUCCESS"
export const IN_PROGRESS = "task_ignat_git/wendesdayReducer/IN_PROGRESS"
export const CHANGE_NOTIFICATION = "task_ignat_git/wendesdayReducer/CHANGE_NOTIFICATION"


let initialState = {
    success: true,
    inProgress: false,
    notification: ""
}

let wednesdayReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SUCCESS:
            return {...state, success: action.success}

        case IN_PROGRESS:
            return {...state, inProgress: action.inProgress}

        case CHANGE_NOTIFICATION:
            return {...state, notification: action.newText}

        default:
            return state

    }

}

export default wednesdayReducer;

export const changeSuccess = (success) => {
    return (
        {type: CHANGE_SUCCESS, success}
    )
}

export const changeNotification = (newText) => {
    return (
        {type: CHANGE_NOTIFICATION, newText}
    )
}

export const changeInProgress = (inProgress) => {
    return (
        {type: IN_PROGRESS, inProgress}
    )
}

export const queryFrom11LessTC=()=>{
    return (dispatch, getState)=>{
        dispatch(changeInProgress(true))

        const success = getState().wednesdayPage.success
        debugger


///взять стейт из 10й строки
        tryCatch(() =>API.getSuccess(success)).then((result) => {
            // debugger
            dispatch(changeInProgress(false))
            if (result.success) {
                dispatch(changeNotification('Запрос прошел успешно'))

            } else {
               dispatch(changeNotification('Запрос прошел неуспешно'))

            }

            setTimeout(() => {
                dispatch(changeNotification(''))
            }, 4000)
        })
    }
}

