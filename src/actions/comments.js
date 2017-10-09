import axios from 'axios'
import { SET_COMMENTS, UPDATE_COMMENT, REMOVE_COMMENT } from '../constants/actionTypes'

export const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments
})

export const updateComment = (comment) => ({
    type: UPDATE_COMMENT,
    comment
})

export const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
})

/**
 * 
 * @param {string} postId 
 */
export const getComments = (postId) => {
    return dispatch => {
        return axios.get(`/posts/${postId}/comments`)
            .then(response => {
                //const { comments } = response.data
                console.log(response)
            })
    }
}

/**
 * 
 * @param {string} commentId 
 */
export const getComment = (commentId) => {
    return dispatch => {
        return axios.get(`/comments/${commentId}`)
            .then(response => {
                //const { comment } = response.data
                console.log(response)
            })
    }
}

/**
 * 
 * @param {object} comment 
 */
export const postComment = (comment) => {
    return dispatch => {
        return axios.post(`/comments`, comment)
            .then(response => {
                console.log(response)
            })
    }
}

/**
 * 
 * @param {string} commentId 
 * @param {object} comment 
 */
export const putComment = (commentId, comment) => {
    return dispatch => {
        return axios.put(`/comments/${commentId}`, comment)
            .then(response => {
                console.log(response)
            })
    }
}

/**
 * 
 * @param {string} commentId 
 */
export const deleteComment = (commentId) => {
    return dispatch => {
        return axios.delete(`/comments/${commentId}`)
            .then(response => {
                console.log(response)
            })
    }
}

/**
 * 
 * @param {string} commentId 
 */
export const voteComment = (commentId, option) => {
    return dispatch => {
        return axios.post(`/comments/${commentId}`, { option })
            .then(response => {
                console.log(response)
            })
    }
}