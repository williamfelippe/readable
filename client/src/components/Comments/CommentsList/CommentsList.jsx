import React, { Component } from 'react'
import { connect } from 'react-redux'
import { comments as commentsActions } from '../../../actions/index'
import { CommentItem, CommentForm } from '../'

class CommentsList extends Component {

    componentDidMount() {
        const { postId, getComments } = this.props
        getComments(postId)
    }

    render() {
        const { comments, postId } = this.props

        const commentsList = comments.map((comment, key) => {
            return (
                <CommentItem key={key} comment={comment} />
            )
        })

        return (
            <div className="panel">
                <div className="panel-header">
                    <div className="panel-title h4">
                        Comments:
                    </div>
                </div>
                <div className="panel-body">
                    <CommentForm postId={postId} />

                    <div className="panel-footer">
                        {commentsList}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, { postId }) => {
    const commentsByPost = state.comments.comments[postId]
    const comments = (commentsByPost && commentsByPost !== undefined) ? Object.values(commentsByPost) : []

    return { comments: comments.filter(comment => !comment.deleted).reverse() }
}

const mapDispatchToProps = dispatch => ({
    getComments: (postId) => dispatch(commentsActions.getComments(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)