import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { LinkButton, Button, Icon } from '../../Spectre/index'
import { UP_VOTE, DOWN_VOTE } from '../../../constants/voteTypes'
import { 
    posts as postsActions, 
    comments as commentsActions,
    confirmRemovalPostModal as confirmRemovalPostModalActions 
} from '../../../actions'
import getInitials from '../../../utils/getInitials'
import formatDate from '../../../utils/formatDate'
import './style.css'

class PostItem extends Component {

    componentDidMount() {
        const { getComments, post } = this.props
        getComments(post.id)
    }

    countComments() {

    }

    render() {
        const { post, votePost, openModal } = this.props

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
                            <LinkButton
                                kind="link"
                                to={`/post/edit/${id}`}
                                className="tooltip"
                                data-tooltip="Edit post">
                                <Icon icon="edit" />
                            </LinkButton>
                        </li>
                        <li className="postItem__rest__item">
                            <Button
                                kind="link"
                                onClick={() => openModal(id)}
                                className="tooltip"
                                data-tooltip="Delete post">
                                <Icon icon="delete" />
                            </Button>
                        </li>
                        <li className="postItem__rest__item">
                            <Button
                                kind="link"
                                className="tooltip"
                                data-tooltip="Comments">
                                <Icon icon="message" /> <small>10 comments</small>
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
                        onClick={() => votePost(id, UP_VOTE)}>
                        <Icon icon="arrow-up" />
                    </Button>
                    <p className="postItem__voteScore">
                        {voteScore}
                    </p>
                    <Button kind="link" className="postItem__voteIcon"
                        onClick={() => votePost(id, DOWN_VOTE)}>
                        <Icon icon="arrow-down" />
                    </Button>
                </div>
            </div>
        )
    }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    votePost: (postId, option) => dispatch(postsActions.votePost(postId, option)),
    getComments: (postId) => dispatch(commentsActions.getComments(postId)),
    openModal: (postId) => dispatch(confirmRemovalPostModalActions.openModal(postId))
})

export default connect(null, mapDispatchToProps)(PostItem)