import React, { Component } from 'react'
import { DashboardRoute } from './components/Global/'
import { Route, Switch } from 'react-router-dom'
import { Home, Category, PostDetail, NewPost, NoMatch } from './containers'
import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-icons.css'
import './assets/styles/index.css'

class App extends Component {

    componentDidUpdate(prevProps) {
        const prevLocation = prevProps.location
        const currentLocation = this.props.location

        if (currentLocation !== prevLocation) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return (
            <Switch>
                <DashboardRoute exact path='/' component={Home} />
                <DashboardRoute exact path='/:category' component={Category} />
                <DashboardRoute exact path='/post/new' component={NewPost} />
                <DashboardRoute exact path='/post/edit/:postId' component={NewPost} />
                <DashboardRoute path='/:category/:postId' component={PostDetail} />

                <Route component={NoMatch} />
            </Switch>
        )
    }
}

export default App