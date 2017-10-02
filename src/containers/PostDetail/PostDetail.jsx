import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommentsList } from '../../components/Comments'
import { Container, Columns, Col, Button, Icon } from '../../components/Spectre'
import { posts as postsActions, comments as commentsActions } from '../../actions'
import { UP_VOTE, DOWN_VOTE } from '../../constants/voteTypes'
import formatDate from '../../utils/formatDate'
import './style.css'

const comment = {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'José',
    category: 'redux',
    voteScore: -5,
    deleted: false
}

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
        const { votePost, /*comment*/ } = this.props
        const { timestamp, title, body, author, category, voteScore } = comment

        return (
            <Container grid="md">
                <Columns>
                    <Col xs={12}>
                        <div className="postDetail">
                            <h1>
                                {title} <span className="label label-primary postDetail__category">
                                    {category}
                                </span>
                            </h1>

                            <h4>
                                Posted by {author} <span className="postDetail__date">
                                    {formatDate(timestamp)}
                                </span>
                            </h4>

                            <div className="postDetail__info">
                                <p className="postDetail__info__body">
                                    {body}
                                </p>

                                <div className="postDetail__info__voteButtons">
                                    <Button kind="link" className="postDetail__info__voteButtons__voteIcon"
                                        onClick={() => votePost(UP_VOTE)}>
                                        <Icon icon="arrow-up" />
                                    </Button>
                                    <p className="postDetail__info__voteButtons__voteScore">
                                        {voteScore}
                                    </p>
                                    <Button kind="link" className="postDetail__info__voteButtons__voteIcon"
                                        onClick={() => votePost(DOWN_VOTE)}>
                                        <Icon icon="arrow-down" />
                                    </Button>
                                </div>
                            </div>

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