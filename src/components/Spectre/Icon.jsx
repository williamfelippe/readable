import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({icon, className}) => {
    return (
        <i className={`icon icon-${icon} ${className}`.trim()}></i>
    )
}

Icon.defaultProps = {
    className: ''
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Icon