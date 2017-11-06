import { 
    OPEN_CONFIRM_REMOVE_COMMENT_MODAL, 
    CLOSE_CONFIRM_REMOVE_COMMENT_MODAL 
} from '../constants/actionTypes'

export const openModal = (commentToDelete) => ({
    type: OPEN_CONFIRM_REMOVE_COMMENT_MODAL,
    commentToDelete
})

export const closeModal = () => ({
    type: CLOSE_CONFIRM_REMOVE_COMMENT_MODAL
})