import {
    SET_POSTS,
    UPDATE_POST,
    REMOVE_POST
} from '../constants/actionTypes'

const initialState = {
    posts: []
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return setPosts(state, action.posts)

        case UPDATE_POST:
            return updatePost(state, action.postId, action.post)

        case REMOVE_POST:
            return removePost(state, action.postId)

        default:
            return state
    }
}

const setPosts = (state, posts) => ({
    ...state, posts
})

const updatePost = (state, postId, post) => ({
    ...state, posts: [...posts, post]
})

const removePost = (state, postId) => ({
    ...state, posts: state.posts.filter(post => post.id !== postId)
})

export default posts