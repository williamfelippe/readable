import { 
    OPEN_EDIT_COMMENT_MODAL, 
    CLOSE_EDIT_COMMENT_MODAL
} from '../constants/actionTypes'

const initialState = {
    open: false,
    commentToEdit: '',
    postWithComment: ''
}

const editCommentsModal = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_EDIT_COMMENT_MODAL:
            return openModal(state, action.commentToEdit, action.postWithComment)

        case CLOSE_EDIT_COMMENT_MODAL:
            return closeModal(state)

        default:
            return state
    }
}

const openModal = (state, commentToEdit, postWithComment) => ({
    ...state,  
    commentToEdit,
    postWithComment,
    open: true
})

const closeModal = (state) => ({
    ...state,
    commentToEdit: '',
    postWithComment: '',
    open: false
})

export default editCommentsModal