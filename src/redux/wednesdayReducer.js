export const CHANGE_SUCCESS = "task_ignat_git/wendesdayReducer/CHANGE_SUCCESS"
export const IN_PROGRESS = "task_ignat_git/wendesdayReducer/IN_PROGRESS"


let initialState = {
    success: true,
    inProgress: false
}

let wednesdayReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SUCCESS:
            return {...state, success: action.success}

        case IN_PROGRESS:
            return {...state, inProgress: action.inProgress}

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

export const changeInProgress = (inProgress) => {
    return (
        {type: IN_PROGRESS, inProgress}
    )
}

