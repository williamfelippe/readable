import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const LinkButton = ({
    to,
    children,
    className,
    disabled,
    kind,
    size,
    loading,
    exact,
    external,
    ...rest
}) => {

    let link = null

    if (external) {
        link = <a href={to} target="_blank" className={`btn ${className} ${disabled ? 'disabled' : ''}
                ${size ? `btn-${size}` : ''} ${kind ? `btn-${kind}` : ''} 
                ${loading ? 'loading' : ''}`} {...rest}>
            {children}
        </a>
    }
    else {
        link = <NavLink to={to} exact={exact} className={`btn ${className} ${disabled ? 'disabled' : ''}
                ${size ? `btn-${size}` : ''} ${kind ? `btn-${kind}` : ''} 
                ${loading ? 'loading' : ''}`} {...rest}>
            {children}
        </NavLink>
    }

    return link
}

LinkButton.defaultProps = {
    className: '',
    disabled: false,
    kind: null,
    size: null,
    loading: false,
    exact: false,
    external: false
}

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    kind: PropTypes.oneOf(['primary', 'link']),
    size: PropTypes.oneOf(['lg', 'sm', 'block']),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    exact: PropTypes.bool,
    external: PropTypes.bool
}

export default LinkButton