import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header, Footer } from './components/Global'
import { RemovePostModal } from './components/Posts'
import { Home, Category, PostDetail, NewPost, NoMatch } from './containers'
import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-icons.css'
import './assets/styles/index.css'

class App extends Component {

    componentDidUpdate(prevProps) {

        const prevLocation = prevProps.location
        const currentLocation = this.props.location

        /**
         * Retorna o rolagem da página para o topo ao
         * trocar de rota
         */
        if (currentLocation !== prevLocation) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        const DashboardRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={props => (
                <div className="app">
                    <Header />

                    <main>
                        <Component {...props} />
                        <RemovePostModal />
                    </main>

                    <Footer />
                </div>
            )} />
        )

        return (
            <Switch>
                <DashboardRoute exact path='/' component={Home} />
                <DashboardRoute exact path='/:category' component={Category} />
                <DashboardRoute exact path='/post/new' component={NewPost} />
                <DashboardRoute exact path='/post/edit/:postId' component={NewPost} />
                <DashboardRoute path='/post/:postId' component={PostDetail} />

                <Route component={NoMatch} />
            </Switch>
        )
    }
}

export default App