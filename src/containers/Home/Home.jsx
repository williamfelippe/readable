import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    posts as postsActions,
    categories as categoriesActions
} from '../../actions'
import {
    Container,
    Columns,
    Col
} from '../../components/Spectre'
//import './style.css'

class Home extends Component {

    componentDidMount() {
        const { getPosts, getCategories } = this.props

        getPosts()
        getCategories()
    }

    render() {
        return (
            <Container grid="lg">
                <Columns>
                    <Col xs={12}>
                        Alright, alright, alright
                    </Col>
                </Columns>
            </Container>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(postsActions.getPosts()),
    getCategories: () => dispatch(categoriesActions.getCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)