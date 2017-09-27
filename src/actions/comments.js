import axios from 'axios'

export const SET_COMMENTS = 'SET_COMMENTS'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

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
export const voteComment = (commentId) => {
    return dispatch => {
        return axios.post(`/comments/${commentId}`, {})
            .then(response => {
                console.log(response)
            })
    }
}