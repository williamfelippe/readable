import { 
    OPEN_CONFIRM_REMOVE_POST_MODAL, 
    CLOSE_CONFIRM_REMOVE_POST_MODAL 
} from '../constants/actionTypes'

export const openModal = (postToDelete) => ({
    type: OPEN_CONFIRM_REMOVE_POST_MODAL,
    postToDelete
})

export const closeModal = () => ({
    type: CLOSE_CONFIRM_REMOVE_POST_MODAL
})