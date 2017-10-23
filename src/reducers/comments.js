import {
    ADD_COMMENTS,
    UPDATE_COMMENT,
    REMOVE_COMMENT
} from '../constants/actionTypes'

const initialState = {
    comments: {}
}

const comments = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENTS:
            return addComments(state, action.comments, action.postId)

        case UPDATE_COMMENT:
            return updateComment(state, action.commentId, action.comment)

        case REMOVE_COMMENT:
            return removeComment(state, action.commentId)

        default:
            return state
    }
}

const addComments = (state, comments, postId) => {
    return {
        ...state,
        comments: {
            ...state.comments,
            [postId]: comments.reduce(
                (accumulator, comment) => {
                    return {
                        ...accumulator,
                        [comment.id]: comment
                    }
                },
                {}
            )
        }
    }
}

const updateComment = (state, commentId, comment) => ({
    ...state,
    comments: {
        ...state.comments,
        [comment.parentId]: {
            [commentId]: comment
        }
    }
})

const removeComment = (state, commentId) => ({
    ...state, comments: state.comments.filter(comment => comment.id !== commentId)
})

export default comments