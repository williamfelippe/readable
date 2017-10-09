import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Input, TextArea, Icon } from '../../Spectre'
import './style.css'

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            comment: ''
        }
    }

    handleAuthor(event) {
        this.setState({ author: event.target.value})
    }

    handleComment(event) {
        this.setState({ comment: event.target.value})
    }

    render() {
        const { postComment } = this.props

        return (
            <div className="commentForm">
                <Input 
                    id="author" 
                    inputClassName="commentForm__input"
                    placeholder="What's your name?"
                    onChange={this.handleAuthor.bind(this)} />

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