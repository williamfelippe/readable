import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import reducers from './store'

import axios from 'axios'

import App from './App'

/**
 * Colocando uma url base e adicionando token de autorização
 * para todas as requisições
 */
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AUTH_TOKEN

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
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
