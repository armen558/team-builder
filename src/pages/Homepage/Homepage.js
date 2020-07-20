import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TeamCard from '../../components/TeamCard/TeamCard';
import Spinner from '../../components/Spinner/Spinner';
import * as actions from '../../actions';

import './Homepage.css';
import reducer from '../../reducers/teamsReducer';

class Homepage extends React.Component {
    componentDidMount = () => {
        this.props.onFetchTeams(this.props.token)
    }

    render() {

        let teams = <Spinner />;
        if (!this.props.isLoading) {
            teams = this.props.teams.map(team => {
                return (
                    <TeamCard
                        name={team.name}
                        topic={team.topic}
                        project={team.project}
                        members={team.members}
                        key={String(team.id)}
                    />
                )
            })
        }

        return (
            <>
            {this.props.token ? null : <Redirect to="login"/>}
                <h1>Teams</h1>
                <div className="teams">
                    {teams}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.teams.error,
        isLoading: state.teams.isLoading,
        teams: state.teams.teams,
        token: state.auth.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchTeams: (token) => dispatch(actions.fetchTeams(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);