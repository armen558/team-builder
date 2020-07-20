import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer  from '../reducers/authReducer';
import topicsReducer from '../reducers/topicsReducer';
import teamsReducer from '../reducers/teamsReducer';
import projectsReducer from '../reducers/projectsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    topics: topicsReducer,
    teams: teamsReducer,
    projects: projectsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;