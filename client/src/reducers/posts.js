import {
    ADD_POST,
    REMOVE_POST,
    SET_POSTS_ORDER,
} from '../constants/actionTypes'

const initialState = {
    posts: {},
    order: ''
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action.post)

        case SET_POSTS_ORDER:
            return setPostsOrder(state, action.order)

        case REMOVE_POST:
            return removePost(state, action.postId)

        default:
            return state
    }
}

const addPost = (state, post) => {
    return (
        post.deleted
            ? state
            : {
                ...state,
                posts: {
                    ...state.posts,
                    [post.id]: post
                }
            }
    )
}

const removePost = (state, postId) => {
    let posts = { ...state.posts }
    delete posts[postId]

    return {
        ...state,
        posts
    }
}

const setPostsOrder = (state, order) => ({
    ...state,
    order
})

export default posts