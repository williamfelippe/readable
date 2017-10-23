import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Columns, Col } from '../../components/Spectre'
import { PostsList } from '../../components/Posts'
import { CategoriesList, EmptyState } from '../../components/Global'
import { posts as postsActions, categories as categoriesActions } from '../../actions'

class Home extends Component {

    componentDidMount() {
        const { getPosts, getCategories } = this.props

        getPosts()
        getCategories()
    }

    render() {
        const { categories, posts, /*empty, loading, error,*/ } = this.props

        return (
            <Container grid="lg">

                {
                    (posts.length > 0) &&
                    <Columns>
                        <Col xs={8}>
                            <PostsList posts={posts} />
                        </Col>
                        <Col xs={4}>
                            <CategoriesList categories={categories} />
                        </Col>
                    </Columns>
                }

                {
                    (posts.length <= 0) &&
                    <Columns>
                        <Col xs={12}>
                            <EmptyState />
                        </Col>
                    </Columns>
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const posts = Object.values(state.posts.posts)
    const categories = state.categories.categories

    return {
        posts,
        categories
    }
}

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(postsActions.getPosts()),
    getCategories: () => dispatch(categoriesActions.getCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)