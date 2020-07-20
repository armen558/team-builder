import * as actionTypes from './actionTypes';
import { fetchTopicsReguest, addTopicRequest, voteTopicRequest, deleteTopicRequest } from '../Helpers';

const fetchTopicsStart = () => {
    return {
        type: actionTypes.FETCH_TOPICS_START
    };
};
const fetchTopicsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_TOPICS_SUCCESS,
        payload: data
    };
};
const fetchTopicsSFail = (err) => {
    return {
        type: actionTypes.FETCH_TOPICS_FAIL,
        payload: err
    };
};
export const fetchTopics = (token) => {
    return dispatch => {
        dispatch(fetchTopicsStart());
        fetchTopicsReguest(token)
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json();
                } else {
                    throw new Error('Topics dispatch failed.')
                }
            })
            .then(data => dispatch(fetchTopicsSuccess(data)))
            .catch(err => dispatch(fetchTopicsSFail(err)))
    }
}

const topicAddStart = () => {
    return {
        type: actionTypes.ADD_TOPIC_START
    };
};
const topicAddSuccess = (data) => {
    return {
        type: actionTypes.ADD_TOPIC_SUCCESS,
        payload: data
    };
};
const topicAddFail = (err) => {
    return {
        type: actionTypes.ADD_TOPIC_FAIL,
        payload: err
    };
};

export const addTopic = (token, title) => {
    return dispatch => {
        dispatch(topicAddStart());
        addTopicRequest(token, title)
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json()
                } else {
                    throw new Error('Topic addition failed')
                }
            })
            .then(data => {
                dispatch(topicAddSuccess(data))
                dispatch(fetchTopics(token))
            })
            .catch(err => dispatch(topicAddFail(err)))
    }
}

const topicVoteStart = () => {
    return {
        type: actionTypes.VOTE_TOPIC_START
    };
};
const topicVoteSuccess = (data) => {
    return {
        type: actionTypes.VOTE_TOPIC_SUCCESS,
    };
};
const topicVoteFail = (err) => {
    return {
        type: actionTypes.VOTE_TOPIC_FAIL,
        payload: err
    };
};

export const topicVote = (token, type, id) => {
    return dispatch => {
        dispatch(topicVoteStart())
        voteTopicRequest(token, type, id)
            .then(resp => {
                if (resp.status === 200) {
                    dispatch(topicVoteSuccess());
                    dispatch(fetchTopics(token))
                } else {
                    throw new Error('Voting failed')
                }
            }).catch(err => dispatch(topicVoteFail(err)))
    }
}


const topicDeleteStart = () => {
    return {
        type: actionTypes.DELETE_TOPIC_START
    };
};
const topicDeleteSuccess = (data) => {
    return {
        type: actionTypes.DELETE_TOPIC_SUCCESS,
    };
};
const topicDeleteFail = (err) => {
    return {
        type: actionTypes.DELETE_TOPIC_FAIL,
        payload: err
    };
};

export const deleteTopic = (token, id) => {
    return dispatch => {
        dispatch(topicDeleteStart())
        deleteTopicRequest(token, id)
            .then(resp => {
                if (resp.status === 200) {
                    dispatch(topicDeleteSuccess());
                    dispatch(fetchTopics(token))
                } else {
                    throw new Error('Deleting failed')
                }
            }).catch(err => dispatch(topicDeleteFail(err)))
    };
};



