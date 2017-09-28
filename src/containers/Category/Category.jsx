import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Columns, Col } from '../../components/Spectre'
import { PostsList } from '../../components/Global'
import { posts as postsActions } from '../../actions'

class Category extends Component {

    componentDidMount() {
        const { getPostsByCategory, match } = this.props
        const { category } = match.params

        getPostsByCategory(category)
    }

    render() {
        const { category } = this.props

        return (
            <Container grid="lg">
                <Columns>
                    <Col xs={12}>
                        <h1>
                            Category: {category}
                        </h1>

                        <PostsList posts={[]} />
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