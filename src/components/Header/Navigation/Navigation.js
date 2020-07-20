import React from 'react';
import { NavLink } from 'react-router-dom';

import MyAccountDropdown from '../MyAccountDropdown/MyAccountDropdown';

import './Navigation.css';

const Navigation = props => {

    let loggedInMenu = (
        <>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/topics">Topics</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
        </>
    )
    if (!props.loggedIn) {
        loggedInMenu = <li><NavLink to="login">Log In</NavLink></li>
    }

    return (
        <div className="navigation">
            <ul className="mainMenu">
                {loggedInMenu}
            </ul>
            {props.loggedIn ? <MyAccountDropdown logout={props.logout} avatarUrl={props.avatarUrl}/> : null}
        </div>
    )
}

export default Navigation;