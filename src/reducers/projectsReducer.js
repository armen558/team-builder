import * as actionTypes from '../actions/actionTypes';

const initialState = {
    projects: [],
    error: '',
    isLoading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PROJECTS_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projects: action.payload,
                error: ''
            }
        case actionTypes.FETCH_PROJECTS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            }
        case actionTypes.VOTE_PROJECT_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.VOTE_PROJECT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case actionTypes.VOTE_PROJECT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            }
        default:
            return state;
    }
}

export default reducer;