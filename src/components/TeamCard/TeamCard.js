import React from 'react';

import './TeamCard.css';

const TeamCard = props => {
    return (
        <div className="teamCard">
            <p>Team name: {props.name}</p>
            <p>Topic: {props.topic}</p>
            <p>Project: {props.project}</p>
            <h5>Members</h5>
            <div className="members">{props.members.map(member => (
                    <p key={member.avatarUrl}>Name: {member.firstName} {member.lastName}</p>
            ))}
            </div>
        </div>
    )
}

export default TeamCard;