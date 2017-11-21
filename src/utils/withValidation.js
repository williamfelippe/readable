import React, { Component } from 'react'
import Validator from 'validatorjs'

const withValidation = (WrappedComponent) => {
    return class extends Component {

        constructor(props) {
            super(props)
            this.state = {
                error: null
            }
        }

        /*componentWillReceiveProps(nextProps) {
            this.showErrorMessageOnValidate(nextProps)
        }*/

        componentDidUpdate(prevProps) {
            if(prevProps.errors !== this.props.errors) {
                this.showErrorMessageOnValidate(this.props)
            }
        }

        showErrorMessageOnValidate(props) {
            const { errors, id } = props
            
            if(errors.hasOwnProperty(id)) {
                const error = errors[id]
                if(error.length > 0) {
                    this.setState({ error: error[0] })
                    return
                }

                this.setState({ error: null })
                return
            }

            this.setState({ error: null })
        }

        validate() {
            const { id, value, rules } = this.props

            if (rules) {
                const data = { [id]: value }
                const validationRules = { [id]: rules }
                const validation = new Validator(data, validationRules)

                if (validation.fails()) {
                    this.setState({ error: validation.errors.first(id) })
                    return
                }

                this.invalidate()
            }
        }

        invalidate() {
            this.setState({ error: null })
        }

        render() {
            return (
                <WrappedComponent
                    invalidate={this.invalidate.bind(this)}
                    validate={this.validate.bind(this)}
                    error={this.state.error}
                    {...this.props} />
            )
        }
    }
}

export default withValidation