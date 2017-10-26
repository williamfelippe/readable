import {
    ADD_COMMENTS,
    UPDATE_COMMENT
} from '../constants/actionTypes'

const initialState = {
    comments: {}
}

const comments = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENTS:
            return addComments(state, action.comments, action.postId)

        case UPDATE_COMMENT:
            return updateComment(state, action.comment)

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
                    return (
                        !comment.deleted 
                            ? { ...accumulator, [comment.id]: comment } 
                            : accumulator
                    )
                },
                {}
            )
        }
    }
}

const updateComment = (state, comment) => ({
    ...state,
    comments: {
        ...state.comments,
        [comment.parentId]: {
            ...state.comments[comment.parentId],
            [comment.id]: comment
        }
    }
})

export default comments