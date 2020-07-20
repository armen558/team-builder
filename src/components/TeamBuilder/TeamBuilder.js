import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import * as actions from '../../actions';
import Homepage from '../../pages/Homepage/Homepage';
import Login from '../../pages/Login/Login';
import MyAccount from '../../pages/MyAccount/MyAccount';
import Register from '../../pages/Register/Register';
import Topics from '../../pages/Topics/Topics';
import Projects from '../../pages/Projects/Projects';
import NotFound404 from '../../pages/NotFound404/NotFound404';

class TeamBuilder extends React.Component {

  componentDidMount = () => {
    if (this.props.token) {
      this.props.onFetchUser(this.props.token);
    }
    if (this.props.companies.length === 0) {
      this.props.onCompanyFetch();
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/my-account" exact component={MyAccount} />
        <Route path="/topics" exact component={Topics} />
        <Route path="/projects" exact component={Projects} />
        <Route component={NotFound404} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    companies: state.auth.companies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (token) => dispatch(actions.fetchUser(token)),
    onCompanyFetch: () => dispatch(actions.fetchCompaniesList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamBuilder);
