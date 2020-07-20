import React from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';

import * as actions from '../../actions';
import Topic from '../../components/Topic/Topic';
import TopicForm from '../../components/Topic/TopicForm/TopicForm';


class Topics extends React.Component {

    componentDidMount = () => {
        this.props.onTopicsFetch(this.props.token);
    }

    handleTopicAdd = (title) => {
        this.props.onTopicAdd(this.props.token, title)
    }

    handleVoting = (type, id) => {
        this.props.onTopicVote(this.props.token, type, id)
    }

    handleDelete = (id) => {
        this.props.onDeleteTopic(this.props.token, id)
    }

    render() {
        setTimeout(() => {
            // this.props.onTopicsFetch(this.props.token);
        }, 5000);

        return (
            <>
            {this.props.token ? null : <Redirect to="/login"/>}
            <div className="topics">
                <TopicForm submit={this.handleTopicAdd}/>
                {this.props.topics.map(topic => (
                    <Topic 
                        title={topic.title}
                        votingsCount={topic.votingsCount}
                        key={topic.id}
                        id={topic.id}
                        votedByMe={topic.votedByMe}
                        canDelete={topic.canDelete}
                        voting={this.handleVoting}
                        deleting={this.handleDelete}
                    />
                ))}
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        topics: state.topics.topicsList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTopicsFetch: (token) => dispatch(actions.fetchTopics(token)),
        onTopicAdd: (token, title) => dispatch(actions.addTopic(token, title)),
        onTopicVote: (token, type, id) => dispatch(actions.topicVote(token, type, id)),
        onDeleteTopic: (token, id) => dispatch(actions.deleteTopic(token, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);