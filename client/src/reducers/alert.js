import { 
    SHOW_ALERT,
    HIDE_ALERT
} from '../constants/actionTypes'

const initialState = {
    openAlert: false,
    message: null
}

const alert = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return showAlert(state, action.message)

        case HIDE_ALERT:
            return hideAlert(state)

        default:
            return state
    }
}

const showAlert = (state, message) => ({
    ...state, 
    openAlert: true,
    message
})

const hideAlert = (state) => ({
    ...state, 
    openAlert: false,
    message: null
})

export default alert