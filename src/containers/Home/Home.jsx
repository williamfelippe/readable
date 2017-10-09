import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Columns, Col } from '../../components/Spectre'
import { PostsList } from '../../components/Posts'
import { CategoriesList, EmptyState } from '../../components/Global'
import { posts as postsActions, categories as categoriesActions } from '../../actions'

/*const posts = [
    {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'William Felippe',
        category: 'react',
        voteScore: 6,
        deleted: false
    },
    {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'José',
        category: 'redux',
        voteScore: -5,
        deleted: false
    },
    {
        id: '6ni6ok3ym7mf1p33lnec',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'Jandira Oliveira',
        category: 'redux',
        voteScore: 3,
        deleted: false
    },
    {
        id: '6ni6ok3ym7mf1p33lnea',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'Ragnar Lothbrook',
        category: 'redux',
        voteScore: -2,
        deleted: false
    },
    {
        id: '6ni6ok3ym7mf1p33lneb',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'Bjorn Ironside',
        category: 'redux',
        voteScore: 10,
        deleted: false
    }
]*/

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

const mapStateToProps = state => ({
    posts: state.posts.posts,
    categories: state.categories.categories
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(postsActions.getPosts()),
    getCategories: () => dispatch(categoriesActions.getCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)