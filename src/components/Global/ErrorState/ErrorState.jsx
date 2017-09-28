import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Button } from '../../Spectre'

const ErrorState = ({ onTryAgain, message }) => {
    return (
        <div className="empty">
            <div className="empty-icon">
                <Icon icon="stop" />
            </div>
            <p className="empty-title h5">
                {message}
            </p>
            <p className="empty-subtitle">
                Click the button below to repeat the action.
            </p>
            <div className="empty-action">
                <Button kind="primary" onClick={onTryAgain}>
                    Try again
                </Button>
            </div>
        </div>
    )
}

ErrorState.propTypes = {
    onTryAgain: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
}

export default ErrorState