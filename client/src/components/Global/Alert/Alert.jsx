import React from 'react'
import { connect } from 'react-redux'
import { alert as alertActions } from '../../../actions'
import './style.css'

const Alert = ({ message, open, hideAlert }) => {
    return (
        (open) ? 
        <div className="toast toast-primary alert">
            <button
                className="btn btn-clear float-right"
                onClick={hideAlert} />
                {message}
        </div> : null
    )
}

const mapStateToProps = ({ alert }) => ({
    open: alert.openAlert,
    message: alert.message
})

const mapDispatchToProps = (dispatch) => ({
    hideAlert: () => dispatch(alertActions.hideAlert())
})

export default connect(mapStateToProps, mapDispatchToProps)(Alert)