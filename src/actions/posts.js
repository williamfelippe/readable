import axios from 'axios'
import {
    SET_POSTS,
    UPDATE_POST,
    REMOVE_POST
} from '../constants/actionTypes'

export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
})

export const updatePost = (post) => ({
    type: UPDATE_POST,
    post
})

export const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
})

/**
 * 
 */
export const getPosts = () => {
    return dispatch => {
        return axios.get('/posts')
            .then(response => {
                const posts = response.data
                dispatch(setPosts(posts))
            })
    }
}

/**
 * 
 * @param {string} categoryName 
 */
export const getPostsByCategory = (categoryName) => {
    return dispatch => {
        return axios.get(`/${categoryName}/posts`)
            .then(response => {
                const posts = response.data
                dispatch(setPosts(posts))
            })
    }
}

/**
 * 
 * @param {object} post 
 */
export const postPost = (post) => {
    return dispatch => {
        return axios.post('/posts', post)
            .then(response => {
                console.log(response)
            })
    }
}

/**
 * 
 * @param {string} postId 
 */
export const getPost = (postId) => {
    return dispatch => {
        return axios.get(`/posts/${postId}`)
            .then(response => {
                console.log(response)
            })
    }
}

/**
 * 
 * @param {string} postId 
 * @param {object} post 
 */
export const putPost = (postId, post) => {
    return dispatch => {
        return axios.put(`/posts/${postId}`, post)
            .then(response => {
                console.log(response)
            })
    }
}

/**
 * 
 * @param {string} postId 
 */
export const deletePost = (postId) => {
    return dispatch => {
        return axios.delete(`/posts/${postId}`)
            .then(response => {
                dispatch(removePost(postId))
            })
    }
}

/**
 * 
 * @param {string} postId 
 * @param {string} option 
 */
export const votePost = (postId, option) => {
    return dispatch => {
        return axios.post(`/posts/${postId}`, { option })
            .then(response => {
                console.log(response)
            })
    }
}