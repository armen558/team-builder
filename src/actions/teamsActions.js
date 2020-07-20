import * as actionTypes from './actionTypes';
import { fetchTeamsRequest } from '../Helpers';

const fetchTeamsStart = () => {
    return {
        type: actionTypes.FETCH_TEAMS_START
    };
};
const fetchTeamsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_TEAMS_SUCCESS,
        payload: data,
    };
};
const fetchTeamsFail = (err) => {
    return {
        type: actionTypes.FETCH_TEAMS_FAIL,
        payload: err
    };
};

export const fetchTeams = (token) => {
    return dispatch => {
        dispatch(fetchTeamsStart());
        fetchTeamsRequest(token)
            .then(resp => {
                if(resp.status === 200) {
                    return resp.json()
                } else {
                    throw new Error('Teams fetch failed.')
                }
            })
            .then(data => dispatch(fetchTeamsSuccess(data)))
            .catch(err => dispatch(fetchTeamsFail(err)))
    }
}