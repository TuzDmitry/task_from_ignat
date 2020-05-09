const SET_LOADING = 'SET_LOADING';

let initialState = {
    loading: true
}

let loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.loading}
        default:
            return state;
    }
}


export const setLoadingAC = () => ({type: SET_LOADING, loading:false})

export default loadingReducer;