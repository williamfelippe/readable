import React from 'react'
import PropTypes from 'prop-types'
import { PostItem } from '../'
import './style.css'

const PostsList = ({ title, posts }) => {

    const postsList = posts.map(post => {
        return (
            <li key={post.id} className="postList__item">
                <PostItem post={post} />
            </li>
        )
    })

    return (
        <div className="panel postPanel">
            <div className="panel-header">
                <div className="panel-title">
                    <h1 className="postPanel__title">
                        {title}
                    </h1>
                </div>
            </div>
            <div className="panel-body">
                <ul className="postList">
                    {postsList}
                </ul>
            </div>
        </div>
    )
}

PostsList.defaultProps = {
    title: 'Posts'
}

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string,
}

export default PostsList