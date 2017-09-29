import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Columns, Col } from '../../components/Spectre'
import { PostsList, CategoriesList, EmptyState } from '../../components/Global'
import { posts as postsActions, categories as categoriesActions } from '../../actions'

const categories = [
    { name: 'react', path: 'react' },
    { name: 'redux', path: 'redux' },
    { name: 'udacity', path: 'udacity' },
    { name: 'programming', path: 'programming' }
]

const posts = [
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
    }
]

class Home extends Component {

    componentDidMount() {
        const { getPosts, getCategories } = this.props

        getPosts()
        getCategories()
    }

    render() {
        const { /*categories, empty, loading, error,*/ votePost } = this.props

        return (
            <Container grid="lg">
                <Columns>
                    <Col xs={8}>
                        <PostsList posts={posts} votePost={votePost} />
                    </Col>
                    <Col xs={4}>
                        <CategoriesList categories={categories} />
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
    votePost: (postId, option) => dispatch(postsActions.votePost(postId, option)),
    getCategories: () => dispatch(categoriesActions.getCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)