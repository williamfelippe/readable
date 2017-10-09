import { OPEN_MODAL, CLOSE_MODAL } from '../constants/actionTypes'

export const openModal = (postId) => ({
    type: OPEN_MODAL,
    postId
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})