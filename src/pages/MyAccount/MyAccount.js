import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../actions';

// {
//     "email": "example@gmail.com",
//     "firstName": "John",
//     "lastName": "Whexler",
//     "birthDate": "2000-02-01",
//     "sex": "male",
//     "avatarUrl": "https://images.unsplash.c.....",
//     "jsExperience": 10,
//     "reactExperience": 1,
//     "companyId": 1,
//     "token": "5f0ddc8933e5a17932fa4acc"
// }


class MyAccount extends React.Component {
    state = {
        inputs: {...this.props.userInfo}
    };

    componentDidMount = () => {
        console.log('update')
        this.props.onFetchUser(this.props.token)
    }

    render() {
        console.log(this.props.userInfo)
        return (
            <>
            {this.props.token ? null : <Redirect to="/login"/>}
            <div>
                <form >
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(_) => this.handleChange(_, 'email')}
                        value={this.state.inputs.email} />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(_) => this.handleChange(_, 'password')}
                        value={this.state.inputs.password} />
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={(_) => this.handleChange(_, 'firstName')}
                        value={this.state.inputs.firstName} />
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={(_) => this.handleChange(_, 'lastName')}
                        value={this.state.inputs.lastName} />
                    <input
                        type="text"
                        placeholder="Birth Date"
                        onChange={(_) => this.handleChange(_, 'birthDate')}
                        value={this.state.inputs.birthDate} />

                    <div className="radioInputs">
                        <input
                            id="male"
                            type="radio"
                            name="sex"
                            value="male"
                            onChange={(_) => this.handleChange(_, 'sex')}
                            checked={this.state.inputs.sex === "male"}
                        />
                        <label htmlFor="male">Male</label>
                        <input
                            id="female"
                            type="radio"
                            name="sex"
                            value="female"
                            onChange={(_) => this.handleChange(_, 'sex')}
                            checked={this.state.inputs.sex === "female"}
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                    <input
                        type="text"
                        placeholder="Avatar URL"
                        onChange={(_) => this.handleChange(_, 'avatarUrl')}
                        value={this.state.inputs.avatarUrl} />
                    <input
                        type="number"
                        placeholder="JS Experience"
                        onChange={(_) => this.handleChange(_, 'jsExperience')}
                        value={this.state.inputs.jsExperience} />
                    <input
                        type="number"
                        placeholder="React Experience"
                        onChange={(_) => this.handleChange(_, 'reactExperience')}
                        value={this.state.inputs.reactExperience} />
                    <select
                        onChange={(_) => this.handleChange(_, 'companyId')}
                        value={this.state.inputs.companyId}
                    >
                        <option value=''>Choose company</option>
                        {this.props.companies.map(company => (
                            <option key={`${company.id}`} value={company.id}>
                                {company.name}
                            </option>
                        ))}
                    </select>
                    <input type="submit" value="Register" disabled={this.props.loading} />
                </form>
            </div>
            </>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        companies: state.auth.companies,
        userInfo: state.auth.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUser: (token) => dispatch(actions.fetchUser(token)),
        onUserUpdate: (info) => dispatch()
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);