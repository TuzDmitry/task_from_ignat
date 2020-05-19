export const CHANGE_SUCCESS = "task_ignat_git/wendesdayReducer/CHANGE_SUCCESS"


let initialState = {
    success: true
}

let wednesdayReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SUCCESS:

            return {...state, success: action.success}
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

