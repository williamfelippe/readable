import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Columns, Col } from '../../components/Spectre'
import { PostsList } from '../../components/Posts'
import { posts as postsActions } from '../../actions'

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
    }   
]

class Category extends Component {

    componentDidMount() {
        const { getPostsByCategory, match } = this.props
        const { category } = match.params

        getPostsByCategory(category)
    }

    render() {
        const { match } = this.props
        const { category } = match.params

        return (
            <Container grid="lg">
                <Columns>
                    <Col xs={8}>
                        <PostsList 
                            title={`Category: ${category}`} 
                            posts={posts} />
                    </Col>
                </Columns>
            </Container>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    getPostsByCategory: (categoryName) => dispatch(postsActions.getPostsByCategory(categoryName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)