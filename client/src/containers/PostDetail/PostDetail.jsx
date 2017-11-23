import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommentsList } from '../../components/Comments'
import { PostActions, PostDeleted } from '../../components/Posts'
import { UP_VOTE, DOWN_VOTE } from '../../constants/voteTypes'
import {
    posts as postsActions,
    comments as commentsActions,
    alert as alertActions
} from '../../actions'
import {
    Container,
    Columns,
    Col,
    Button,
    Icon
} from '../../components/Spectre'
import formatDate from '../../utils/formatDate'
import './style.css'

class PostDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postDeleted: false
        }
    }

    componentDidMount() {
        const { getPost, getComments, match } = this.props
        const { postId } = match.params

        getPost(postId)
            .then((post) => {
                if (!post) {
                    this.setState({ postDeleted: true })
                    return
                }

                this.setState({ postDeleted: false })
                getComments(postId)
            })
    }

    componentWillReceiveProps(nextProps) {
        const { post, showAlert, history } = nextProps
        if(!post) {
            showAlert('Post was deleted')
            history.push('/')
        }
    }

    renderElements() {
        const { votePost, match, post, commentsLength } = this.props
        const { postDeleted } = this.state
        const { postId } = match.params

        if (postDeleted) {
            return <PostDeleted />
        }

        if (post) {
            return (
                <Container grid="md">
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

                                <div className="postDetail__actions">
                                    <PostActions
                                        postId={postId}
                                        commentsLength={commentsLength}
                                        withCategory={false} />
                                </div>

                                <CommentsList postId={postId} />
                            </div>
                        </Col>
                    </Columns>
                </Container>
            )
        }
        
        return null
    }

    render() {
        return (
            this.renderElements()
        )
    }
}

const mapStateToProps = ({ posts, comments }, { match }) => {
    const { postId } = match.params
    const commentsByPost = comments.comments[postId]

    const commentsLength =
        (commentsByPost && commentsByPost !== undefined)
            ? Object.values(commentsByPost).length
            : 0

    return {
        post: posts.posts[postId],
        commentsLength
    }
}

const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(postsActions.getPost(postId)),
    votePost: (postId, option) => dispatch(postsActions.votePost(postId, option)),
    getComments: (postId) => dispatch(commentsActions.getComments(postId)),
    showAlert: (message) => dispatch(alertActions.showAlert(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)