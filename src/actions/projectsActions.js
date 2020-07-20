import * as actionTypes from './actionTypes';
import { fetchProjectsRequest, voteProjectsRequest } from '../Helpers';

const fetchProjectsStart = () => {
    return {
        type: actionTypes.FETCH_PROJECTS_START
    };
};
const fetchProjectsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_PROJECTS_SUCCESS,
        payload: data
    };
};
const fetchProjectsFail = (err) => {
    return {
        type: actionTypes.FETCH_PROJECTS_FAIL,
        payload: err
    };
};
export const fetchProjects = (token) => {
    return dispatch => {
        dispatch(fetchProjectsStart());
        fetchProjectsRequest(token)
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json();
                } else {
                    throw new Error('Topics dispatch failed.')
                }
            })
            .then(data => dispatch(fetchProjectsSuccess(data)))
            .catch(err => dispatch(fetchProjectsFail(err)))
    }
}



const projectVoteStart = () => {
    return {
        type: actionTypes.VOTE_PROJECT_START
    };
};
const projectVoteSuccess = (data) => {
    return {
        type: actionTypes.VOTE_PROJECT_SUCCESS,
    };
};
const projectVoteFail = (err) => {
    return {
        type: actionTypes.VOTE_PROJECT_FAIL,
        payload: err
    };
};

export const projectVote = (token, type, id) => {
    return dispatch => {
        dispatch(projectVoteStart())
        voteProjectsRequest(token, type, id)
            .then(resp => {
                if (resp.status === 200) {
                    dispatch(projectVoteSuccess());
                    dispatch(fetchProjects(token))
                } else {
                    throw new Error('Voting failed')
                }
            }).catch(err => dispatch(projectVoteFail(err)))
    }
}
