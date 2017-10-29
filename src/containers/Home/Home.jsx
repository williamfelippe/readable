import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Columns, Col } from '../../components/Spectre'
import { PostsList, SortPostsSelect } from '../../components/Posts'
import { CategoriesList, EmptyState } from '../../components/Global'
import { posts as postsActions, categories as categoriesActions } from '../../actions'
import _ from 'lodash'

class Home extends Component {

    componentDidMount() {
        const { getPosts, getCategories } = this.props

        getPosts()
        getCategories()
    }

    render() {
        const { 
            categories, 
            posts
            /*empty, loading, error,*/ 
        } = this.props

        return (
            <Container grid="lg">

                <Columns>
                    <Col xs={6} sm={4} xl={2} offset='left'>
                        <SortPostsSelect />
                    </Col>
                </Columns>

                {
                    (posts.length > 0) &&
                    <Columns>
                        <Col sm={12} xl={8}>
                            <PostsList posts={posts} />
                        </Col>
                        <Col sm={12} xl={4}>
                            <CategoriesList categories={categories} />
                        </Col>
                    </Columns>
                }

                {
                    (posts.length <= 0) &&
                    <Columns>
                        <Col xl={12}>
                            <EmptyState />
                        </Col>
                    </Columns>
                }
            </Container>
        )
    }
}

const mapStateToProps = (state, props) => {
    const order = state.posts.order
    const categories = state.categories.categories
    let posts = Object.values(state.posts.posts).filter(post => !post.deleted)

    return {
        posts: (order !== '') ? _.orderBy(posts, order, 'asc') : posts,
        order,
        categories
    }
}

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(postsActions.getPosts()),
    getCategories: () => dispatch(categoriesActions.getCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)