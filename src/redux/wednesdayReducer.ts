import {API, tryCatch} from "../dal/api";
import {Dispatch} from "redux";
import {AppStateType} from "./reduxStore";


export const CHANGE_SUCCESS = "task_ignat_git/wendesdayReducer/CHANGE_SUCCESS"
export const IN_PROGRESS = "task_ignat_git/wendesdayReducer/IN_PROGRESS"
export const CHANGE_NOTIFICATION = "task_ignat_git/wendesdayReducer/CHANGE_NOTIFICATION"

type InitialStateType={
    success: boolean
    inProgress: boolean
    notification: string
}

let initialState:InitialStateType = {
    success: true,
    inProgress: false,
    notification: ""
}

let wednesdayReducer = (state = initialState, action:ActionTypes):InitialStateType => {
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

export type ActionTypes =ChangeSuccessACType|ChangeNotificationACType|ChangeInProgressACType

type ChangeSuccessACType={
    type: typeof CHANGE_SUCCESS
    success:boolean
}
type ChangeNotificationACType={
    type: typeof CHANGE_NOTIFICATION
    newText:string
}
type ChangeInProgressACType={
    type: typeof IN_PROGRESS
    inProgress:boolean
}



///Action Creators
export const changeSuccess = (success:boolean):ChangeSuccessACType => {
    return (
        {type: CHANGE_SUCCESS, success}
    )
}

export const changeNotification = (newText:string):ChangeNotificationACType => {
    return (
        {type: CHANGE_NOTIFICATION, newText}
    )
}

export const changeInProgress = (inProgress:boolean):ChangeInProgressACType => {
    return (
        {type: IN_PROGRESS, inProgress}
    )
}

///Thunk Creators
export const queryFrom11Less=()=>{
    return (dispatch:Dispatch<ActionTypes>, getState:()=>AppStateType)=>{
        dispatch(changeInProgress(true))

        const success = getState().wednesdayPage.success;


///взять стейт из 10й строки
        tryCatch(() =>API.getSuccess(success))
            .then((result) => {
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

