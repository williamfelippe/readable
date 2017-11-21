import React from 'react'
import PropTypes from 'prop-types'

const Col = ({
    children,
    xs,
    sm,
    md,
    lg,
    xl,
    hide,
    show,
    offset,
    className
}) => {

    /**
     * 
     */
    const cols = [
        { value: xs, class: 'xs-' },
        { value: sm, class: 'sm-' },
        { value: md, class: 'md-' },
        { value: lg, class: 'lg-' },
        { value: xl, class: '' }
    ]

    const margins = {
        'left': 'col-ml-auto',
        'right': 'col-mr-auto',
        'equal': 'col-mx-auto'
    }

    /**
     * 
     */
    const classes = cols.reduce((prevValue, col) => {
        return `${prevValue} ${col.value ? `col-${col.class}${col.value}` : ''}`
    }, '')

    return (
        <div className={
            `column ${classes} ${hide ? hide : ''} ${show ? show : ''} 
            ${offset ? margins[offset] : ''} ${className} `.trim()
        }>
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
    offset: null,
    className: ''
}

Col.propTypes = {
    children: PropTypes.node,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    offset: PropTypes.oneOf(['left', 'right', 'equal']),
    hide: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    show: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    className: PropTypes.string
}

export default Col