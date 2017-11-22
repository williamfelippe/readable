import axios from 'axios'
import {
    ADD_POST,
    REMOVE_POST,
    SET_POSTS_ORDER
} from '../constants/actionTypes'

export const addPost = (post) => ({
    type: ADD_POST,
    post
})

export const setPostsOrder = (order) => ({
    type: SET_POSTS_ORDER,
    order
})

export const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
})

export const getPosts = () => {
    return dispatch => {
        return axios.get('/posts')
            .then(response => {
                const posts = response.data
                for (const post of posts) {
                    dispatch(addPost(post))
                }
            })
    }
}

export const getPostsByCategory = (categoryName) => {
    return dispatch => {
        return axios.get(`/${categoryName}/posts`)
            .then(response => {
                const posts = response.data
                for (const post of posts) {
                    dispatch(addPost(post))
                }
            })
    }
}

export const postPost = (post) => {
    return dispatch => {
        return axios.post('/posts', post)
            .then(response => {
                const { data } = response
                dispatch(addPost(data))
                return data
            })
            .catch(error => {
                throw error
            })
    }
}

export const getPost = (postId) => {
    return dispatch => {
        return axios.get(`/posts/${postId}`)
            .then(response => {
                const post = response.data
                dispatch(addPost(post))

                return post
            })
            .catch(error => {
                throw error
            })
    }
}

export const putPost = (postId, post) => {
    return dispatch => {
        return axios.put(`/posts/${postId}`, post)
            .then(response => {
                dispatch(addPost(response.data))
            })
    }
}

export const deletePost = (postId) => {
    return dispatch => {
        return axios.delete(`/posts/${postId}`)
            .then(response => {
                dispatch(removePost(postId))
                return response
            })
    }
}

export const votePost = (postId, option) => {
    return dispatch => {
        return axios.post(`/posts/${postId}`, { option })
            .then(response => {
                dispatch(addPost(response.data))
            })
    }
}