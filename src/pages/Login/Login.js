import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import * as actions from '../../actions';

const Login = props => {
    return (
        <>
            {props.token ? <Redirect to="/" /> : null}
            <div>
                {/* {this.props.token ? <Redirect to="/" /> : null} */}
                <LoginForm submit={props.onLogin} />
                {props.error ? <div className="error"> {props.error} </div> : null}
                <div className="note">Don't have account yet? <Link to="register">Sign Up</Link></div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        error: state.auth.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(actions.login(email, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);