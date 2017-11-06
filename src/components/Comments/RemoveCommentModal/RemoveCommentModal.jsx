import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../../Spectre'
import {
    comments as commentsActions,
    confirmRemovalCommentModal as confirmRemovalCommentModalActions
} from '../../../actions'

const RemoveCommentModal = ({ open, commentToDelete, closeModal, deleteComment }) => {

    const removeComment = () => {
        deleteComment(commentToDelete)
            .then((response) => {
                closeModal()
            })
    }

    return (
        <div className={`modal modal-sm ${open ? 'active' : ''}`}>
            <div className="modal-container" role="document">
                <div className="modal-header">
                    <div className="modal-title h5">
                        Remove comment?
                    </div>
                </div>
                <div className="modal-body">
                    <div className="content">
                        <p>
                            Are you sure do you want to remove this comment?
                        </p>
                    </div>
                </div>
                <div className="modal-footer">
                    <Button kind="primary" onClick={removeComment}>
                        Oh yeah
                    </Button>
                    <Button kind="link" onClick={closeModal}>
                        Nops
                    </Button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    open: state.confirmRemovalCommentModal.open,
    commentToDelete: state.confirmRemovalCommentModal.commentToDelete
})

const mapDispatchToProps = dispatch => ({
    deleteComment: (commentId) => dispatch(commentsActions.deleteComment(commentId)),
    closeModal: () => dispatch(confirmRemovalCommentModalActions.closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(RemoveCommentModal)