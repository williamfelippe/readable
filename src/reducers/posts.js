import { ADD_POST, SET_POSTS_ORDER } from '../constants/actionTypes'

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

const setPostsOrder = (state, order) => ({
    ...state, 
    order
})

/*const removePost = (state, postId) => {
    let posts = { ...this.state.posts }
    delete posts[postId]

    return { ...state, posts }
}*/

export default posts