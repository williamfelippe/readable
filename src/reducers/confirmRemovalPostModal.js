import { 
    OPEN_CONFIRM_REMOVE_POST_MODAL, 
    CLOSE_CONFIRM_REMOVE_POST_MODAL
} from '../constants/actionTypes'

const initialState = {
    open: false,
    postToDelete: ''
}

const confirmRemovalPostModal = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_CONFIRM_REMOVE_POST_MODAL:
            return openModal(state, action.postToDelete)

        case CLOSE_CONFIRM_REMOVE_POST_MODAL:
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