import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Icon } from '../../Spectre/index'
import { UP_VOTE, DOWN_VOTE } from '../../../constants/voteTypes'
import { 
    comments as commentsActions, 
    confirmRemovalCommentModal as confirmRemovalCommentModalActions,
    editCommentsModal as editCommentsModalActions 
} from '../../../actions/index'
import formatDate from '../../../utils/formatDate'
import getInitials from '../../../utils/getInitials'
import './style.css'

const CommentItem = ({ 
    comment, 
    voteComment, 
    deleteComment, 
    editComment, 
    confirmRemoval 
}) => {

    const { 
        id, 
        author, 
        body, 
        timestamp, 
        voteScore, 
        parentId 
    } = comment

    return (
        <div className="tile commentItem">
            <div className="tile-icon">
                <figure className="avatar" data-initial={getInitials(author)} />
            </div>
            <div className="tile-content">
                <p className="tile-title commentItem__title">
                    {author} <span className="commentItem__title__date">
                        {formatDate(timestamp)}
                    </span>
                </p>
                <p className="tile-subtitle commentItem__subtitle">
                    {body}
                </p>

                <ul className="commentItem__footer">
                    <li className="commentItem__footer__item">
                        <Button
                            kind="link"
                            className="tooltip"
                            data-tooltip="Edit comment"
                            onClick={() => editComment(id, parentId)}>
                            <Icon icon="edit" />
                        </Button>
                    </li>
                    <li className="commentItem__footer__item">
                        <Button
                            kind="link"
                            className="tooltip"
                            data-tooltip="Delete comment"
                            onClick={() => confirmRemoval(id)}>
                            <Icon icon="delete" />
                        </Button>
                    </li>
                    <li className="commentItem__footer__item">
                        <Button
                            kind="link"
                            className="tooltip"
                            data-tooltip="Up vote comment"
                            onClick={() => voteComment(id, UP_VOTE)}>
                            <Icon icon="arrow-up" />
                        </Button>
                    </li>
                    <li className="commentItem__footer__item">
                        <small>
                            {voteScore}
                        </small>
                    </li>
                    <li className="commentItem__footer__item">
                        <Button
                            kind="link"
                            className="tooltip"
                            data-tooltip="Down vote comment"
                            onClick={() => voteComment(id, DOWN_VOTE)}>
                            <Icon icon="arrow-down" />
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

CommentItem.propTypes = {
    comment: PropTypes.object.isRequired,
    voteComment: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    voteComment: (commentId, option) => dispatch(commentsActions.voteComment(commentId, option)),
    confirmRemoval: (commentId) => dispatch(confirmRemovalCommentModalActions.openModal(commentId)),
    editComment: (commentId, parentId) => dispatch(editCommentsModalActions.openModal(commentId, parentId))
})

export default connect(null, mapDispatchToProps)(CommentItem)