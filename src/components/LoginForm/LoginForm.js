import React from 'react';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event, type) => {
        this.setState({ [type]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submit(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="loginForm">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email" 
                        placeholder="Email" 
                        onChange={(_) => this.handleChange(_, 'email')}
                        value={this.state.email} />
                    <input
                        type="password" 
                        placeholder="Password" 
                        onChange={(_) => this.handleChange(_, 'password')}
                        value={this.state.password} />
                    <input type="submit" value="Log in" />
                </form>
            </div>
        )
    }

}

export default LoginForm;