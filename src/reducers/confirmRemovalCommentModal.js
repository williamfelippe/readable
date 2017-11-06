import { 
    OPEN_CONFIRM_REMOVE_COMMENT_MODAL, 
    CLOSE_CONFIRM_REMOVE_COMMENT_MODAL
} from '../constants/actionTypes'

const initialState = {
    open: false,
    commentToDelete: ''
}

const confirmRemovalCommentModal = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_CONFIRM_REMOVE_COMMENT_MODAL:
            return openModal(state, action.commentToDelete)

        case CLOSE_CONFIRM_REMOVE_COMMENT_MODAL:
            return closeModal(state)

        default:
            return state
    }
}

const openModal = (state, commentToDelete) => ({
    ...state,  
    commentToDelete,
    open: true
})

const closeModal = (state) => ({
    ...state,
    commentToDelete: '',
    open: false
})

export default confirmRemovalCommentModal