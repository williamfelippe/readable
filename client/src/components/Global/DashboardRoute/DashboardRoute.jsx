import React from 'react'
import { Route } from 'react-router-dom'
import { Header, Footer, Alert } from '../'
import { RemovePostModal } from '../../Posts'
import { RemoveCommentModal, CommentEditModal } from '../../Comments'

const DashboardRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <div className="app">
            <Header />

            <main>
                <Component {...props} />

                <RemovePostModal />
                <RemoveCommentModal />
                <CommentEditModal />
                <Alert />
            </main>

            <Footer />
        </div>
    )} />
)

export default DashboardRoute