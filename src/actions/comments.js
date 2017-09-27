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
 * @param {*} commentId 
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
 * @param {*} id 
 * @param {*} body 
 * @param {*} author 
 * @param {*} parentId 
 */
export const postComment = (id, body, author, parentId) => {
    return dispatch => {
        return axios.post(`/comments`, {id, body, author, parentId})
            .then(response => {
                console.log(response)
            })
    }
}

/**
 * 
 * @param {*} commentId 
 * @param {*} timestamp 
 * @param {*} body 
 */
export const putComment = (commentId, timestamp, body) => {
    return dispatch => {
        return axios.put(`/comments/${commentId}`, {timestamp, body})
            .then(response => {
                console.log(response)
            })
    }
}

/**
 * 
 * @param {*} commentId 
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
 * @param {*} commentId 
 */
export const voteComment = (commentId) => {
    return dispatch => {
        return axios.post(`/comments/${commentId}`, {})
            .then(response => {
                console.log(response)
            })
    }
}