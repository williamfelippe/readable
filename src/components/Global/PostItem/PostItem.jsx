import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { LinkButton, Button, Icon } from '../../Spectre'
import { UP_VOTE, DOWN_VOTE } from '../../../constants/voteTypes'
import getInitials from '../../../utils/getInitials'
import formatDate from '../../../utils/formatDate'
import './style.css'

const PostItem = ({ post, votePost }) => {

    const {
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore
    } = post

    return (
        <div className="tile postItem">
            <div className="tile-icon">
                <figure
                    className="avatar avatar-xl postItem__avatar"
                    data-initial={getInitials(author)}
                    style={{ backgroundColor: '#5764c6' }} />
                <span className="postItem__author">
                    {author}
                </span>
            </div>

            <div className="tile-content">
                <p className="tile-title postItem__title">
                    {title}
                    <span className="postItem__title__date">
                        {formatDate(timestamp)}
                    </span>
                </p>

                <p className="tile-subtitle">
                    <NavLink exact to={`/post/${id}`} className="postItem__body">
                        {body}
                    </NavLink>
                </p>

                <ul className="postItem__rest">
                    <li className="postItem__rest__item">
                        <LinkButton kind="link" to={`/post/edit/${id}`}>
                            <Icon icon="edit" />
                        </LinkButton>
                    </li>
                    <li className="postItem__rest__item">
                        <Button kind="link" onClick={() => console.log('Vou deletei')}>
                            <Icon icon="delete" />
                        </Button>
                    </li>
                    <li className="postItem__rest__item">
                        <Button kind="link" onClick={() => console.log('Vou comentei')}>
                            <Icon icon="message" /> <small> 10 comments</small>
                        </Button>
                    </li>
                    <li className="postItem__rest__item">
                        <span className="label label-primary postItem__rest__item__label">
                            {category}
                        </span>
                    </li>
                </ul>

            </div>

            <div className="tile-action">
                <Button kind="link" className="postItem__voteIcon"
                    onClick={() => votePost(UP_VOTE)}>
                    <Icon icon="arrow-up" />
                </Button>
                <p className="postItem__voteScore">
                    {voteScore}
                </p>
                <Button kind="link" className="postItem__voteIcon"
                    onClick={() => votePost(DOWN_VOTE)}>
                    <Icon icon="arrow-down" />
                </Button>
            </div>
        </div>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    votePost: PropTypes.func.isRequired
}

export default PostItem