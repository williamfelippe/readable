import React, { Component } from 'react'
import { connect } from 'react-redux'
import { comments as commentsActions } from '../../../actions/index'
import { CommentItem, CommentForm } from '../'

const comments = [
    {
        author: 'Tony Stark',
        body: 'The Strategic Homeland Intervention, Enforcement, and Logistics Division...',
        timestamp: Date.now(),
        voteScore: 2
    },
    {
        author: 'Bruce Banner',
        body: 'The Strategic Homeland Intervention, Enforcement, and Logistics Division...',
        timestamp: Date.now(),
        voteScore: -4
    },
    {
        author: 'Thor Odinson',
        body: 'The Strategic Homeland Intervention, Enforcement, and Logistics Division...',
        timestamp: Date.now(),
        voteScore: 10
    },
    {
        author: 'Steve Rogers',
        body: 'The Strategic Homeland Intervention, Enforcement, and Logistics Division...',
        timestamp: Date.now(),
        voteScore: 1
    }
]

class CommentsList extends Component {

    componentDidMount() {
        const { postId, getComments } = this.props
        getComments(postId)
    }

    render() {

        const { voteComment, postComment/*, comments*/ } = this.props

        const commentsList = comments.map((comment, key) => {
            return (
                <CommentItem key={key} comment={comment} voteComment={voteComment} />
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
                    <CommentForm postComment={postComment} />
                    <div className="panel-footer">
                        {commentsList}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    getComments: (postId) => dispatch(commentsActions.getComments(postId)),
    postComment: (comment) => dispatch(commentsActions.postComment(comment)),
    deleteComment: (commentId) => dispatch(commentsActions.deleteComment(commentId)),
    voteComment: (commentId) => dispatch(commentsActions.voteComment(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)