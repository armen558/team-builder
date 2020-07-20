import React from 'react';
import { Link } from 'react-router-dom';

import './MyAccountDropdown.css';

class MyAccountDropdown extends React.Component {

    state = {
        isDropdownOpen: false
    }

    handleDropdownOpen = () => {
        this.setState(prevState => {
            return {
                isDropdownOpen: !prevState.isDropdownOpen
            }
        })
    }

    render() {
        return (
            <div className="accDropdownWrap">
                <span className="myAccBtn" onClick={this.handleDropdownOpen}>My Account</span>
                <div className={`dropdown ${this.state.isDropdownOpen ? 'open' : ''}`}>
                    <Link to="my-account" onClick={this.handleDropdownOpen}><img src={this.props.avatarUrl} className="avatar" /></Link>
                    <Link to="my-account" onClick={this.handleDropdownOpen}>Edit my account</Link>
                    <span className="logoutBtn" onClick={this.props.logout}>Log out</span>
                </div>
            </div>
        )
    }
};

export default MyAccountDropdown;