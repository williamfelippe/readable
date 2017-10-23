import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({
    id,
    label,
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

            <textarea
                id={id}
                className={`form-input ${inputClassName}`}
                placeholder={placeholder}
                onChange={onChange}
                {...rest} />
        </div>
    )
}


TextArea.defaultProps = {
    label: null,
    placeholder: '',
    labelClassName: '',
    inputClassName: ''
}

TextArea.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onChangeValue: PropTypes.func.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string
}

export default TextArea