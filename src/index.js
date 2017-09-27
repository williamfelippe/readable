import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import reducers from './store'

import 'jquery'
import 'materialize-css'

import axios from 'axios'

import App from './App'

/**
 * Iniciando axios. Colocando uma base url para todos as requisições
 */
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

/**
 * Configurando logger
 */
const logger = createLogger({
    level: 'info',
    collapsed: true
})

/**
 * Configurando store e middlewares
 */
const store = createStore(
    reducers,
    compose(applyMiddleware(logger, promise, thunk))
)

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
)
