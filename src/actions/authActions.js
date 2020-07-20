import * as actionTypes from './actionTypes';
import { fetchCompanies, loginRequest, registerRequest, logoutRequest, getUser } from '../Helpers';

const fetchCompaniesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_COMPANIES_SUCCESS,
        payload: data
    };
};
const fetchCompaniesFail = (err) => {
    return {
        type: actionTypes.FETCH_COMPANIES_FAIL,
        payload: err
    };
};

export const fetchCompaniesList = () => {
    return dispatch => {
        fetchCompanies()
            .then(data => dispatch(fetchCompaniesSuccess(data)))
            .catch(err => fetchCompaniesFail(err))
    };
};

const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
    };
};
const loginSuccess = (data) => {
    sessionStorage.setItem('userToken', data.token)
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: data,
    };
};
const loginFail = (err) => {
    console.log(err)
    return {
        type: actionTypes.LOGIN_FAIL,
        payload: err
    };
};

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginStart());
        loginRequest(email, password)
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json()
                } else {
                    throw new Error('Login failed')
                }
            })
            .then(data => dispatch(loginSuccess(data)))
            .catch(err => dispatch(loginFail(err)))
    };
};


const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    };
};
const registerSuccess = (message) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: message
    };
}; const registerFail = (err) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        payload: err
    };
};

export const register = (data) => {
    return dispatch => {
        dispatch(registerStart());
        registerRequest(data)
            .then(resp => resp)
            .then(resp => {
                if (resp.status === 200) {
                    console.log('You have registered successfully', resp)
                    dispatch(registerSuccess("You have registered successfully"))
                } else {
                    console.log('Something went wrong while registering', resp)
                    dispatch(registerFail("something went wrong while registering"))
                }
            })
    };
};

const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    };
};
const logoutFail = (err) => {
    return {
        type: actionTypes.LOGOUT_FAIL,
        payload: err
    };
};
export const logout = (token) => {
    return dispatch => {
        logoutRequest(token).then(resp => {
            if (resp.status === 200) {
                dispatch(logoutSuccess())
            } else {
                throw new Error('Logout failed')
            }
        })
            .catch(err => dispatch(logoutFail(err)))
    }
}

const fetchUserStart = () => {
    return {
        type: actionTypes.FETCH_USER_START
    };
};
const fetchUserSuccess = (data) => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        payload: data,
    };
};
const fetchUserFail = (err) => {
    return {
        type: actionTypes.FETCH_USER_FAIL,
        payload: err
    };
};

export const fetchUser = (token) => {
    return dispatch => {
        dispatch(fetchUserStart());
        getUser(token)
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json()
                } else {
                    throw new Error('User data failed to get by token')
                }
            })
            .then(data => dispatch(fetchUserSuccess(data)))
            .catch(err => dispatch(fetchUserFail(err)))

    };
};

