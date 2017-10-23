import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
    id,
    label,
    type,
    placeholder,
    labelClassName,
    inputClassName,
    onChangeValue,
    ...rest
}) => {

    const onChange = event => {
        onChangeValue(event.target.value)
    }

    return (
        <div className="form-group">
            {
                label && <label className={`form-label ${labelClassName}`} for={id}>
                    {label}
                </label>
            }

            <input
                id={id}
                className={`form-input ${inputClassName}`}
                type={type}
                placeholder={placeholder}
                onChange={onChange} />
        </div>
    )
}


Input.defaultProps = {
    label: null,
    type: 'text',
    placeholder: '',
    labelClassName: '',
    inputClassName: ''
}

Input.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onChangeValue: PropTypes.func.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string
}

export default Input