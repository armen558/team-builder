import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../actions';

import './Projects.css';

class Projects extends React.Component {

    componentDidMount = () => {
        this.props.onProjectsFetch(this.props.token);
    }

    handleVoting = (type, id) => {
        let voteType = 'like';
        if (type) {
            voteType = 'unlike'
        }
        this.props.onProjectVote(this.props.token, voteType, id)
    }

    render() {
        return (
            <>
                {this.props.token ? null : <Redirect to="/login" />}
                <div className="projectList">
                    {this.props.projects.map(project => (
                        <div className="project" key={String(project.id)}>
                            <div>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                            </div>
                            <div><button
                                className={`likeBtn ${project.votedByMe ? 'liked' : ''}`}
                                onClick={() => this.handleVoting(project.votedByMe, project.id)}
                            >
                                Like{project.votedByMe ? 'd' : ''}
                            </button></div>
                        </div>
                    ))}
                </div>
            </>
        )
    };
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        projects: state.projects.projects
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onProjectsFetch: (token) => dispatch(actions.fetchProjects(token)),
        onProjectVote: (token, type, id) => dispatch(actions.projectVote(token, type, id)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);