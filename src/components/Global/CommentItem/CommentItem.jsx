import React from 'react'
import PropTypes from 'prop-types'

const CommentItem = ({ comment, voteComment }) => {

    const { author, body, timestamp } = comment

    return (
        <div className="tile">
            <div className="tile-icon">
                <figure className="avatar" data-initial="TO"></figure>
            </div>
            <div className="tile-content">
                <p className="tile-title">
                    {author}
                </p>
                <p className="tile-subtitle">
                    {body}
                </p>
                <small>{timestamp}</small>
            </div>
        </div>
    )
}

CommentItem.propTypes = {
    comment: PropTypes.object.isRequired,
    voteComment: PropTypes.func.isRequired
}

export default CommentItem