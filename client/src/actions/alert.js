import { 
    SHOW_ALERT,
    HIDE_ALERT
} from '../constants/actionTypes'

export const showAlert = (message) => ({
    type: SHOW_ALERT,
    message
})

export const hideAlert = () => ({
    type: HIDE_ALERT
})