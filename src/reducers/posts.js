import {
    ADD_POST,
    REMOVE_POST
} from '../constants/actionTypes'

const initialState = {
    posts: {}
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action.post)

        case REMOVE_POST:
            return removePost(state, action.postId)

        default:
            return state
    }
}

const addPost = (state, post) => ({
    ...state,
    posts: {
        ...state.posts,
        [post.id]: post
    }
})

const removePost = (state, postId) => {
    const posts = { ...this.state.posts }
    delete posts[postId]

    return { ...state, posts }
}

export default posts