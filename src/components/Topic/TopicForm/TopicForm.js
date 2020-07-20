import React from 'react';

import './TopicForm.css';

class TopicForm extends React.Component {
    
    state = {
        input: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submit(this.state.input);
        this.setState({input: ''})
    };

    handleChange = (event) => {
        this.setState({input: event.target.value})
    };

    render () {
        return (
            <div className="topicForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.input} placeholder="Topic title" onChange={this.handleChange}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default TopicForm