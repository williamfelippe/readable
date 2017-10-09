import { OPEN_MODAL, CLOSE_MODAL } from '../constants/actionTypes'

const initialState = {
    open: false,
    postToDelete: ''
}

const confirmRemovalPostModal = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return openModal(state, action.postToDelete)

        case CLOSE_MODAL:
            return closeModal(state)

        default:
            return state
    }
}

const openModal = (state, postToDelete) => ({
    ...state,  
    postToDelete,
    open: true
})

const closeModal = (state) => ({
    ...state,
    postToDelete: '',
    open: false
})

export default confirmRemovalPostModal