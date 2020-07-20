import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

class Register extends React.Component {

    render() {
        return (
            <div>
                {this.props.isRegistered
                    ? <p>You have registered successfully. Please <Link to="/login">login here</Link></p>
                    : <RegisterForm
                        companies={this.props.companies}
                        loading={this.props.isLoading}
                        submitForm={this.props.onRegister}
                    />
                }
                {this.props.regError ? <div className="error">{this.props.regError}</div> : null}
                <div className="note">Already have an account? <Link to="login">Log in</Link></div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        companies: state.auth.companies,
        regError: state.auth.regError,
        isRegistered: state.auth.isRegistered,
        isLoading: state.auth.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (data) => dispatch(actions.register(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);