import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#b4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'linethrough' : 'none'
        }
    }

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type = "checkbox" onChange={this.props.markComplete.bind(this)} /> {' '}
                {this.props.todo.title}
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: '#b4f4f4'
}

export default TodoItem
