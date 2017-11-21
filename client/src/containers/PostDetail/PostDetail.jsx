import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommentsList } from '../../components/Comments'
import { Container, Columns, Col, Button, Icon } from '../../components/Spectre'
import { posts as postsActions, comments as commentsActions } from '../../actions'
import { UP_VOTE, DOWN_VOTE } from '../../constants/voteTypes'
import formatDate from '../../utils/formatDate'
import './style.css'

class PostDetail extends Component {

    componentDidMount() {
        const { getPost, getComments, match } = this.props
        const { postId } = match.params

        getPost(postId)
        getComments(postId)
    }

    render() {
        const { votePost, match, post } = this.props
        const { postId } = match.params

        return (
            (post) ? <Container grid="md">
                <Columns>
                    <Col xs={12}>
                        <div className="postDetail">
                            <h1>
                                {post.title} <span className="label label-primary postDetail__category">
                                    {post.category}
                                </span>
                            </h1>

                            <h4>
                                Posted by {post.author} <span className="postDetail__date">
                                    {formatDate(post.timestamp)}
                                </span>
                            </h4>

                            <div className="postDetail__info">
                                <p className="postDetail__info__body">
                                    {post.body}
                                </p>

                                <div className="postDetail__info__voteButtons">
                                    <Button 
                                        kind="link" 
                                        className="postDetail__info__voteButtons__voteIcon"
                                        onClick={() => votePost(postId, UP_VOTE)}>
                                        <Icon icon="arrow-up" />
                                    </Button>

                                    <p className="postDetail__info__voteButtons__voteScore">
                                        {post.voteScore}
                                    </p>

                                    <Button 
                                        kind="link" 
                                        className="postDetail__info__voteButtons__voteIcon"
                                        onClick={() => votePost(postId, DOWN_VOTE)}>
                                        <Icon icon="arrow-down" />
                                    </Button>
                                </div>
                            </div>

                            <CommentsList postId={postId} />
                        </div>
                    </Col>
                </Columns>
            </Container> : null
        )
    }
}

const mapStateToProps = ({ posts }, {match}) => {
    const { postId } = match.params

    return {
        post: posts.posts[postId]
    }
}

const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(postsActions.getPost(postId)),
    votePost: (postId, option) => dispatch(postsActions.votePost(postId, option)),
    getComments: (postId) => dispatch(commentsActions.getComments(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)