import { 
    OPEN_EDIT_COMMENT_MODAL, 
    CLOSE_EDIT_COMMENT_MODAL 
} from '../constants/actionTypes'

export const openModal = (commentToEdit, postWithComment) => ({
    type: OPEN_EDIT_COMMENT_MODAL,
    commentToEdit,
    postWithComment
})

export const closeModal = () => ({
    type: CLOSE_EDIT_COMMENT_MODAL
})