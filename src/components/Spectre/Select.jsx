import React from 'react'
import PropTypes from 'prop-types'

const Select = ({
    options,
    value,
    placeholder,
    className,
    inputClassName,
    onSelectValue,
    ...rest
}) => {

    const onChange = event => {
        onSelectValue(event.target.value)
    }

    const optionsList = options.map(({ value, text }, key) => {
        return (
            <option key={key} value={value}>
                {text}
            </option>
        )
    })

    return (
        <div className={`form-group ${className}`}>
            <select className={`form-select ${inputClassName}`} value={value}
                onChange={onChange}>
                <option>{placeholder}</option>
                {optionsList}
            </select>
        </div>
    )
}


Select.defaultProps = {
    options: [],
    placeholder: '',
    className: '',
    inputClassName: ''
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        text: PropTypes.string
    })).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onSelectValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    inputClassName: PropTypes.string
}

export default Select