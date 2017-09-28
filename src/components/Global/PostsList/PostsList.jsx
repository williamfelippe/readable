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
        <ul>
            {postsList}
        </ul>
    )
}

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PostsList