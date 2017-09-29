import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from '../../Spectre'
import './style.css'

const CommentItem = ({ comment, voteComment }) => {

    const { author, body, timestamp } = comment

    return (
        <div className="tile commentItem">
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

                <ul className="commentItem__footer">
                    <li className="commentItem__footer__item">
                        <Button kind="link">
                            <Icon icon="emoji" />
                        </Button>
                    </li>
                    <li className="commentItem__footer__item">
                        <small>
                            {timestamp}
                        </small>
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

export default CommentItem