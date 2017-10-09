import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../../Spectre'
import {
    posts as postsActions,
    confirmRemovalPostModal as confirmRemovalPostModalActions
} from '../../../actions'

const RemovePostModal = ({ open, postToDelete, closeModal, deletePost }) => {

    return (
        <div className={`modal modal-sm ${open ? 'active' : ''}`}>
            <div className="modal-container" role="document">
                <div className="modal-header">
                    <div className="modal-title h5">
                        Remove post
                    </div>
                </div>
                <div className="modal-body">
                    <div className="content">
                        <p>
                            Are you sure do you want to remove this post?
                        </p>
                    </div>
                </div>
                <div className="modal-footer">
                    <Button kind="primary" onClick={() => deletePost(postToDelete)}>
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
    open: state.confirmRemovalPostModal.open,
    postToDelete: state.confirmRemovalPostModal.postToDelete
})

const mapDispatchToProps = dispatch => ({
    deletePost: (postId) => dispatch(postsActions.deletePost(postId)),
    closeModal: () => dispatch(confirmRemovalPostModalActions.closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(RemovePostModal)