import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Input, TextArea, Icon } from '../../Spectre'
import { comments as commentsActions } from '../../../actions/index'
import uuidv4 from 'uuid/v4'
import './style.css'

class CommentForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            author: '',
            body: ''
        }
    }

    onSubmit(event) {
        event.preventDefault()

        const { postId, postComment } = this.props
        const { author, body } = this.state

        const comment = {
            id: uuidv4(),
            timestamp: Date.now(),
            body,
            author,
            parentId: postId
        }

        postComment(comment)
            .then(() => {
                this.setState({
                    author: '', 
                    body: ''
                })
            })
    }

    render() {
        const { author, body } = this.state

        return (
            <form className="commentForm"
                onSubmit={this.onSubmit.bind(this)}>
                <Input
                    id="author"
                    inputClassName="commentForm__input"
                    placeholder="What's your name?"
                    value={author}
                    onChangeValue={(author) => this.setState({ author })} />

                <TextArea
                    id="comment"
                    inputClassName="commentForm__textArea"
                    value={body}
                    placeholder="Write a comment..."
                    onChangeValue={(body) => this.setState({ body })} />

                <Button
                    kind="primary"
                    className="commentForm__button"
                    type="submit">
                    Submit <Icon icon="forward" />
                </Button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postComment: (comment) => dispatch(commentsActions.postComment(comment))
})

export default connect(null, mapDispatchToProps)(CommentForm)