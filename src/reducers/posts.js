import { ADD_POST } from '../constants/actionTypes'

const initialState = {
    posts: {}
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action.post)

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

/*const removePost = (state, postId) => {
    let posts = { ...this.state.posts }
    delete posts[postId]

    return { ...state, posts }
}*/

export default posts