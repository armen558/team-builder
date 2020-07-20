import * as actionTypes from '../actions/actionTypes';

let userToken = sessionStorage.getItem('userToken');

const initialState = {
    token: userToken || '',
    userInfo: {},
    companies: [],
    isLoading: false,
    regError: false,
    isRegistered: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COMPANIES_SUCCESS:
            return {
                ...state,
                companies: action.payload
            }
        case actionTypes.LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                token: action.payload.token,
                isLoading: false,
            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            }
        case actionTypes.REGISTER_START:
            return {
                ...state,
                isLoading: true,
                regError: false
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: true,
                isLoading: false,
                regError: false
            }
        case actionTypes.REGISTER_FAIL:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                isRegistered: false,
                regError: action.payload
            }
        case actionTypes.LOGOUT_SUCCESS:
            sessionStorage.removeItem('userToken');
            return {
                ...state,
                token: '',
                userInfo: {}
            }
        case actionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                userInfo: action.payload
            }
        case actionTypes.UPDATE_USER_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.UPDATE_USER_SUCCESS:
        console.log(action)    
        return {
                ...state,
                isLoading: false,
            }
        case actionTypes.UPDATE_USER_FAIL:
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