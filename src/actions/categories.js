import axios from 'axios'

/**
 * 
 */
export const getCategories = () => {
    return dispatch => {
        return axios.get(`/categories`)
            .then(response => {
                console.log(response)
            })
    }
}