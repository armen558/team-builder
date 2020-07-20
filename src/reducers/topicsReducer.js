import * as actionTypes from '../actions/actionTypes';

const initialState = {
    topicsList: [],
    error: '',
    isLoading: false,
    topicAdded: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOPICS_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_TOPICS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                topicsList: action.payload,
                error: ''
            }
        case actionTypes.FETCH_TOPICS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            }
        case actionTypes.ADD_TOPIC_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.ADD_TOPIC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                topicAdded: true,
                error: ''
            }
        case actionTypes.ADD_TOPIC_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            }
        case actionTypes.VOTE_TOPIC_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.VOTE_TOPIC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case actionTypes.VOTE_TOPIC_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            }
        case actionTypes.DELETE_TOPIC_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.DELETE_TOPIC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case actionTypes.DELETE_TOPIC_FAIL:
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