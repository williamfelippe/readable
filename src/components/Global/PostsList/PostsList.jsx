import React from 'react'
import PropTypes from 'prop-types'
import { PostItem } from '../'

const PostsList = ({ posts }) => {

    const postsList = posts.map(post => {
        return (
            <li key={post.id}>
                <PostItem post={post} />
            </li>
        )
    })

    return (
        <div className="panel">
            <div className="panel-header">
                <div className="panel-title">
                    <h4>
                        Posts
                    </h4>
                </div>
            </div>
            <div className="panel-body">
                <ul>
                    {postsList}
                </ul>
            </div>
        </div>
    )
}

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PostsList