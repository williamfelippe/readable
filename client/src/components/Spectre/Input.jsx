import React from 'react'
import PropTypes from 'prop-types'
import withValidation from '../../utils/withValidation'

const Input = ({
    id,
    labelClassName,
    inputClassName,
    type,
    label,
    value,
    placeholder,
    onChangeValue,
    invalidate,
    validate,
    rules,
    error,
    errors,
    ...rest
}) => {

    const onBlur = () => {
        validate()
    }

    const onFocus = () => {
        invalidate()
    }

    const onChange = (event) => {
        onChangeValue(event.target.value)
    }

    return (
        <div className={`form-group ${error ? 'has-error' : ''}`}>
            {
                label && <label className={`form-label ${labelClassName}`} for={id}>
                    {label}
                </label>
            }

            <input
                id={id}
                className={`form-input ${inputClassName}`}
                type={type}
                value={value}
                onBlur={onBlur}
                onFocus={onFocus}
                placeholder={placeholder}
                onChange={onChange}
                {...rest} />

            <p className="form-input-hint">
                {error}
            </p>
        </div>
    )
}


Input.defaultProps = {
    label: null,
    type: 'text',
    placeholder: '',
    labelClassName: '',
    inputClassName: '',
    rules: 'required'
}

Input.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    value: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string
}

export default withValidation(Input)