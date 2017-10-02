import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, TextArea, Icon } from '../../Spectre'
import './style.css'

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: ''
        }
    }

    handleComment(event) {
        this.setState({ comment: event.target.value})
    }

    render() {
        const { postComment } = this.props

        return (
            <div className="commentForm">
                <TextArea
                    id="comment"
                    inputClassName="commentForm__textArea"
                    placeholder="Write a comment..."
                    onChange={this.handleComment.bind(this)} />

                <Button 
                    kind="primary" 
                    className="commentForm__button" 
                    onClick={() => postComment()} >
                    Submit <Icon icon="forward" />
                </Button>
            </div>
        )
    }
}

CommentForm.propTypes = {
    postComment: PropTypes.func.isRequired
}

export default CommentForm