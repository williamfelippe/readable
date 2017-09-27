import React from 'react'
import PropTypes from 'prop-types'

const Col = ({ children, xs, sm, md, lg, xl, hide, show, className }) => {

    /**
     * 
     */
    const cols = [
        { value: xs, class: '' },
        { value: sm, class: 'sm' },
        { value: md, class: 'md' },
        { value: lg, class: 'lg' },
        { value: xl, class: 'xl' }
    ]

    /**
     * 
     */
    const classes = cols.reduce((prevValue, col) => {
        return `${prevValue} ${col.value ? `col-${col.class}${col.value}` : ''}`
    }, '')

    return (
        <div className={`column ${classes} ${hide ? hide : ''} ${show ? show : ''} ${className}`.trim()}>
            {children}
        </div>
    )
}

Col.defaultProps = {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    hide: null,
    show: null,
    className: ''
}

Col.propTypes = {
    children: PropTypes.node,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    hide: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    show: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    className: PropTypes.string
}

export default Col