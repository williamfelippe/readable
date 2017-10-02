import { SET_CATEGORIES } from '../constants/actionTypes'

const initialState = {
    categories: []
}

const categories = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return setCategories(state, action.categories)

        default:
            return state
    }
}

const setCategories = (state, categories) => ({
    ...state, categories
})

export default categories