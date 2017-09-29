import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../../Spectre'
import { posts as postsActions } from '../../../actions'

const RemovePostModal = ({ active, postToDelete, deletePost }) => {

    return (
        <div className={`modal modal-sm ${active ? 'active' : ''}`}>
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
                    <Button kind="primary" onClick={(postToDelete) => deletePost(postToDelete)}>
                        Oh yeah
                    </Button>
                    <Button kind="link" onClick={() => console.log("Dar um jeito aqui rs")}>
                        Nops
                    </Button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    deletePost: (postId) => dispatch(postsActions.deletePost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RemovePostModal)