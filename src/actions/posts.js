import axios from 'axios'
import { ADD_POST, SET_POSTS_ORDER } from '../constants/actionTypes'

export const addPost = (post) => ({
    type: ADD_POST,
    post
})

export const setPostsOrder = (order) => ({
    type: SET_POSTS_ORDER,
    order
})

/**
 * 
 */
export const getPosts = () => {
    return dispatch => {
        return axios.get('/posts')
            .then(response => {
                const posts = response.data
                for(const post of posts) {
                    dispatch(addPost(post))
                }
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
                for(const post of posts) {
                    dispatch(addPost(post))
                }
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
                dispatch(addPost(response.data))
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
                const post = response.data
                dispatch(addPost(post))

                return post
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
                dispatch(addPost(response.data))
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
                dispatch(addPost(response.data))
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
                dispatch(addPost(response.data))
            })
    }
}