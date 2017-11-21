import React from 'react'
import PropTypes from 'prop-types'

const Columns = ({ children, className, hide, show }) => {
    return (
        <div className={`columns ${hide ? hide : ''} ${show ? show : ''} ${className}`.trim()}>
            {children}
        </div>
    )
}

Columns.defaultProps = {
    className: ''
}

Columns.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hide: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    show: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

export default Columns