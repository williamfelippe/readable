import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({icon, className, ...rest}) => {
    return (
        <i className={`icon icon-${icon} ${className}`.trim()} {...rest}></i>
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