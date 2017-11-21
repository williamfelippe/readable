import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, TextArea, Icon } from '../../Spectre'
import {
    comments as commentsActions,
    editCommentsModal as editCommentsModalActions
} from '../../../actions'
import Validator from 'validatorjs'

class CommentEditModal extends Component {

    constructor() {
        super()
        this.state = {
            body: '',
            editing: false,
            formErrors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.initializeCommentBody(nextProps)
    }

    initializeCommentBody(props) {
        const { comments, open } = props
        const { editing } = this.state

        if (comments && open && !editing) {
            const { commentToEdit, postWithComment } = props
            const comment = comments[postWithComment][commentToEdit]

            if (comment) {
                this.setState({
                    body: comment.body,
                    editing: true
                })
            }
        }
    }

    onSubmit(event) {
        event.preventDefault()

        if (this.isFormValid()) {
            const { commentToEdit, updateComment } = this.props
            const { body } = this.state

            updateComment(commentToEdit, { body })
                .then(() => {
                    const { closeModal } = this.props
                    closeModal()
                })
        }
    }

    isFormValid() {
        const data = {
            comment: this.state.body
        }

        const rules = {
            comment: 'required'
        }

        const validation = new Validator(data, rules)

        if (validation.fails()) {
            this.setState({ formErrors: validation.errors.all() })
            return false
        }

        return true
    }

    render() {
        const { open } = this.props
        const { body, formErrors } = this.state

        return (
            <div className={`modal modal-sm ${open ? 'active' : ''}`}>
                <div className="modal-container" role="document">
                    <div className="modal-header">
                        <div className="modal-title h5">
                            Edit comment
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="content">
                            <form 
                                className="commentForm" 
                                onSubmit={this.onSubmit.bind(this)}>
                                <TextArea
                                    id="comment"
                                    inputClassName="commentForm__textArea"
                                    value={body}
                                    errors={formErrors}
                                    rules="required"
                                    placeholder="Write a comment..."
                                    onChangeValue={(body) => this.setState({ body })} />

                                <Button
                                    kind="primary"
                                    className="commentForm__button"
                                    type="submit">
                                    Submit <Icon icon="forward" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ editCommentsModal, comments }) => {
    const { commentToEdit, postWithComment } = editCommentsModal

    return {
        open: editCommentsModal.open,
        comments: comments.comments,
        commentToEdit,
        postWithComment
    }
}

const mapDispatchToProps = dispatch => ({
    updateComment: (commentId, comment) => dispatch(commentsActions.putComment(commentId, comment)),
    closeModal: () => dispatch(editCommentsModalActions.closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentEditModal)