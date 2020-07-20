import React from 'react';

import './Topic.css';

const Topic = props => {

    let voteType = 'like';
    if (props.votedByMe) {
        voteType = 'unlike';
    }

    return (
        <div className="topic">
            <h4>{props.title}</h4>
            <div className="btnsWrap">
                <div className="votes">Votes: {props.votingsCount}</div>
                <button
                    className={`likeBtn ${props.votedByMe ? 'liked' : ''}`}
                    onClick={() => props.voting(voteType, props.id)}
                >
                    Like{props.votedByMe ? 'd' : ''}
                </button>
                <button
                    className="deletBtn"
                    disabled={!props.canDelete}
                    onClick={() => props.deleting(props.id)}
                >×</button>

            </div>
        </div>
    )
}

export default Topic;