import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Columns, Col } from '../../components/Spectre'
import { PostsList, CategoriesList, EmptyState } from '../../components/Global'
import { posts as postsActions, categories as categoriesActions } from '../../actions'
//import './style.css'

class Home extends Component {

    componentDidMount() {
        const { getPosts, getCategories } = this.props

        getPosts()
        getCategories()
    }

    render() {
        const { categories } = this.props

        return (
            <Container grid="lg">
                <Columns>
                    <Col xs={8}>
                        <PostsList posts={[]} />
                    </Col>
                    <Col xs={4}>
                        <CategoriesList categories={[]} />
                    </Col>
                </Columns>

                <Columns>
                    <Col xs={12}>
                        {/*<EmptyState />*/}
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