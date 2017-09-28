import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommentsList } from '../../components/Global'
import { Container, Columns, Col } from '../../components/Spectre'
import { posts as postsActions, comments as commentsActions } from '../../actions'
//import { UP_VOTE, DOWN_VOTE } from '../../constants/voteTypes'
import './style.css'

class PostDetail extends Component {

    componentDidMount() {
        const { getPost, getComments, match } = this.props
        const { postId } = match.params

        getPost(postId)
        getComments(postId)
    }

    /**
     * 
     * 
     * @param {string} option 
     * @memberof PostDetail
     */
    vote(option) {
        const { votePost, match } = this.props
        const { postId } = match.params

        votePost(postId, option)
    }

    render() {
        return (
            <Container grid="lg">
                <Columns>
                    <Col xs={12}>
                        <div className="postdetail">
                            <h1>
                                Maecenas aliquet, nisi ac iaculis convallis
                            </h1>

                            <h4>
                                Posted by William Silva
                            </h4>

                            <p className="postdetail__body">
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                cubilia Curae; Integer tempus tempus orci, vitae ultrices risus finibus ac.
                                Vestibulum fermentum, dolor eget condimentum eleifend, odio purus efficitur
                                erat, non viverra libero metus sit amet felis. Suspendisse luctus orci eget
                                dui sollicitudin condimentum. Pellentesque non dolor ut ex ornare pellentesque
                                sit amet in quam. Nulla egestas finibus mi. Fusce vehicula sapien vel mi
                                consectetur sodales. Vestibulum fermentum, turpis eu fringilla ultricies,
                                arcu ex aliquet augue, at molestie ante enim eget augue. Suspendisse finibus
                                nibh nec eros aliquam pulvinar. Duis aliquet orci non nisi posuere, et luctus
                                nibh pellentesque.
                            </p>

                            <CommentsList />
                        </div>
                    </Col>
                </Columns>
            </Container>

        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(postsActions.getPost(postId)),
    votePost: (postId, option) => dispatch(postsActions.votePost(postId, option)),
    getComments: (postId) => dispatch(commentsActions.getComments(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)