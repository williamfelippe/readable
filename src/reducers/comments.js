import {
    SET_COMMENTS,
    UPDATE_COMMENT,
    REMOVE_COMMENT
} from '../constants/actionTypes'

const initialState = {
    comments: []
}

const comments = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return setComments(state, action.comments)

        case UPDATE_COMMENT:
            return updateComment(state, action.commentId, action.comment)

        case REMOVE_COMMENT:
            return removeComment(state, action.commentId)

        default:
            return state
    }
}

const setComments = (state, comments) => ({
    ...state, comments
})

const updateComment = (state, commentId, comment) => ({
    ...state, comments: [...comments, comment]
})

const removeComment = (state, commentId) => ({
    ...state, comments: state.comments.filter(comment => comment.id !== commentId)
})

export default comments