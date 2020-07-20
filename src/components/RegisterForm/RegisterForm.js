import React from 'react';

class RegisterForm extends React.Component {
    state = {
        inputs: {
            "email": "",
            "password": "",
            "firstName": "",
            "lastName": "",
            "birthDate": "",
            "sex": "",
            "avatarUrl": "",
            "jsExperience": '',
            "reactExperience": '',
            "companyId": 0,
        },
    }


    handleChange = (event, type) => {
        const inputs = { ...this.state.inputs, [type]: event.target.value };
        if (type === 'companyId') {
            inputs.companyId = +event.target.value;
        }
        this.setState({ inputs });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitForm(this.state.inputs);
    };

    render() {
        return (
            <div className="registerForm">
                <form onSubmit={(_) => this.handleSubmit(_)}>
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
        )
    }

}

export default RegisterForm;