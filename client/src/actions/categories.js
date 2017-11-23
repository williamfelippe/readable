import axios from 'axios'
import { SET_CATEGORIES } from '../constants/actionTypes'

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    categories
})

export const getCategories = () => {
    return dispatch => {
        return axios.get(`/categories`)
            .then(response => {
                const { categories } = response.data
                dispatch(setCategories(categories))
            })
    }
}