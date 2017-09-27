import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header, Footer } from './components'
import { Home, PostDetail, NewPost, NoMatch } from './containers'
import 'materialize-css/dist/css/materialize.css'

class App extends Component {

    componentDidUpdate(prevProps) {

        const prevLocation = prevProps.location
        const currentLocation = this.props.location

        /**
         * 
         */
        if (currentLocation !== prevLocation) {
            window.scrollTo(0, 0)
        }
    }

    render() {

        const DashboardRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={props => (
                <div>
                    <Header {...props} />

                    <main>
                        <Component {...props} />
                    </main>

                    <Footer />
                </div>
            )} />
        )

        return (
            <Switch>
                <DashboardRoute exact path='/' component={Home} />
                <DashboardRoute exact path='/post/:postId' component={PostDetail} />
                <DashboardRoute exact path='/post/new' component={NewPost} />
                <DashboardRoute exact path='/post/edit/:postId' component={NewPost} />

                <Route component={NoMatch} />
            </Switch>
        )
    }
}

export default App