import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { PostActions } from '../'
import { Button, Icon } from '../../Spectre/index'
import { UP_VOTE, DOWN_VOTE } from '../../../constants/voteTypes'
import {
    posts as postsActions,
    comments as commentsActions
} from '../../../actions'
import getInitials from '../../../utils/getInitials'
import formatDate from '../../../utils/formatDate'
import './style.css'

class PostItem extends Component {

    componentDidMount() {
        const { getComments, post } = this.props
        getComments(post.id)
    }

    render() {
        const { post, comments, votePost } = this.props

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
                        <NavLink exact to={`/${category}/${id}`} className="postItem__body">
                            {body}
                        </NavLink>
                    </p>

                    <PostActions 
                        postId={id}
                        commentsLength={comments.length}
                        category={category} />
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

const mapStateToProps = (state, props) => {
    const { post } = props
    const comments = state.comments.comments[post.id]

    return {
        comments: (comments && comments !== undefined) ? Object.values(comments) : []
    }
}

const mapDispatchToProps = dispatch => ({
    votePost: (postId, option) => dispatch(postsActions.votePost(postId, option)),
    getComments: (postId) => dispatch(commentsActions.getComments(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)