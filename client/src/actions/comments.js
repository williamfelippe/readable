import axios from 'axios'
import {
    ADD_COMMENTS,
    UPDATE_COMMENT,
    REMOVE_COMMENT,
    LOADING_COMMENTS
} from '../constants/actionTypes'

export const addComments = (comments, postId) => ({
    type: ADD_COMMENTS,
    comments,
    postId
})

export const updateComment = (comment) => ({
    type: UPDATE_COMMENT,
    comment
})

export const removeComment = (postId, commentId) => ({
    type: REMOVE_COMMENT,
    postId,
    commentId
})

export const setLoading = (status) => ({
    type: LOADING_COMMENTS,
    status
})

export const getComments = (postId) => {
    return dispatch => {
        return axios.get(`/posts/${postId}/comments`)
            .then(response => {
                const comments = response.data
                dispatch(addComments(comments, postId))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getComment = (commentId) => {
    return dispatch => {
        return axios.get(`/comments/${commentId}`)
            .then(response => {
                dispatch(updateComment(response.data))
            })
    }
}

export const postComment = (comment) => {
    return dispatch => {
        return axios.post(`/comments`, comment)
            .then(response => {
                dispatch(updateComment(response.data))
            })
    }
}

export const putComment = (commentId, comment) => {
    return dispatch => {
        return axios.put(`/comments/${commentId}`, comment)
            .then(response => {
                dispatch(updateComment(response.data))
                return response
            })
    }
}

export const deleteComment = (commentId) => {
    return dispatch => {
        return axios.delete(`/comments/${commentId}`)
            .then(response => {
                const comment = response.data
                dispatch(removeComment(comment.parentId, comment.id))
            })
    }
}

export const voteComment = (commentId, option) => {
    return dispatch => {
        return axios.post(`/comments/${commentId}`, { option })
            .then(response => {
                dispatch(updateComment(response.data))
            })
    }
}