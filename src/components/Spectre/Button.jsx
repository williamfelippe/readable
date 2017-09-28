import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, type, className, disabled, kind, size, loading }) => {
    return (
        <button className={`btn ${className} ${disabled ? 'disabled' : ''}
            ${size ? `btn-${size}` : ''} ${kind ? `btn-${kind}` : ''} 
            ${loading ? 'loading' : ''}`}
            type={type} >
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'text',
    className: '',
    disabled: false,
    kind: null,
    size: null,
    loading: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    kind: PropTypes.oneOf(['primary', 'link']),
    size: PropTypes.oneOf(['lg', 'sm', 'block']),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool
}

export default Button