import React from 'react'
import PropTypes from 'prop-types'
import withValidation from '../../utils/withValidation'

const Select = ({
    id,
    options,
    value,
    placeholder,
    className,
    inputClassName,
    onSelectValue,
    invalidate,
    validate,
    error,
    errors,
    ...rest
}) => {

    const onSelect = () => {
        validate()
    }

    const onChange = event => {
        onSelectValue(event.target.value)
        invalidate()
    }

    const optionsList = options.map(({ value, text }, key) => {
        return (
            <option key={key} value={value}>
                {text}
            </option>
        )
    })

    return (
        <div className={`form-group ${className} ${error ? 'has-error' : ''}`}>
            <select className={`form-select ${inputClassName}`} value={value}
                onChange={onChange}
                onSelect={onSelect}>
                <option value="">
                    {placeholder}
                </option>
                {optionsList}
            </select>

            <p className="form-input-hint">
                {error}
            </p>
        </div>
    )
}


Select.defaultProps = {
    options: [],
    placeholder: '',
    className: '',
    inputClassName: '',
    errors: {}
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        text: PropTypes.string
    })).isRequired,
    errors: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onSelectValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    inputClassName: PropTypes.string
}

export default withValidation(Select)