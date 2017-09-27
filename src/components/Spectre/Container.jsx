import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, grid, hide, show, className }) => {
    return (
        <div className={`container ${grid ? `grid-${grid}` : ''}
            ${hide ? hide : ''} ${show ? show : ''} ${className}`.trim()}>
            {children}
        </div>
    )
}

Container.defaultProps = {
    grid: null,
    hide: null,
    show: null,
    className: ''
}

Container.propTypes = {
    children: PropTypes.node,
    grid: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    hide: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    show: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    className: PropTypes.string
}

export default Container