import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Navigation from './Navigation/Navigation';

import './Header.css';

const Header = props => {
    return (
        <div className="header">
            <Navigation
                loggedIn={props.token}
                logout={() => props.onLogout(props.token)}
                avatarUrl={props.userInfo.avatarUrl} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        userInfo: state.auth.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: (token) => dispatch(actions.logout(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
