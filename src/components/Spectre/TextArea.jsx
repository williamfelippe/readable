import React from 'react'
import PropTypes from 'prop-types'
import withValidation from '../../utils/withValidation'

const TextArea = ({
    id,
    value,
    label,
    placeholder,
    labelClassName,
    inputClassName,
    onChangeValue,
    invalidate,
    validate,
    rules,
    error,
    errors,
    ...rest
}) => {

    const onFocus = () => {
        invalidate()
    }

    const onBlur = () => {
        validate()
    }

    const onChange = event => {
        onChangeValue(event.target.value)
    }

    return (
        <div className={`form-group ${error ? 'has-error' : ''}`}>
            {
                label && <label className={`form-label ${labelClassName}`} for={id}>
                    {label}
                </label>
            }

            <textarea
                id={id}
                value={value}
                className={`form-input ${inputClassName}`}
                placeholder={placeholder}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChange}
                {...rest} />

            <p className="form-input-hint">
                {error}
            </p>
        </div>
    )
}


TextArea.defaultProps = {
    label: null,
    placeholder: '',
    labelClassName: '',
    inputClassName: '',
    rules: ''
}

TextArea.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    value: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    rules: PropTypes.string
}

export default withValidation(TextArea)