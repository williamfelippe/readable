import React, { Component } from 'react'
import { connect } from 'react-redux'
import { posts as postsActions } from '../../actions'
import {
    Container,
    Columns,
    Col,
    Icon,
    Button,
    LinkButton,
    Input,
    TextArea,
    Select
} from '../../components/Spectre'
import uuidv4 from 'uuid/v4'
import './style.css'

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            author: '',
            category: '',
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        this.populatePost()
    }

    /**
     * 
     * 
     * @memberof NewPost
     */
    populatePost() {
        const { match, getPost } = this.props
        const { postId } = match.params

        if (postId && postId !== undefined) {
            getPost(postId)
                .then(post => {
                    const { author, category, title, body } = post
                    this.setState({
                        author,
                        category,
                        title,
                        body
                    })
                })
        }
    }

    /**
     * 
     * 
     * @param {object} event 
     * @memberof NewPost
     */
    handleSubmit(event) {
        event.preventDefault()
        this.sendPost()
    }

    /**
     * 
     * 
     * @memberof NewPost
     */
    sendPost() {
        const { match, history } = this.props
        const { postId } = match.params

        const { title, body } = this.state

        /**
         * 
         */
        if (postId && postId !== undefined) {
            const { updatePost } = this.props
            updatePost(postId, { title, body })
        }

        /**
         * 
         */
        else {
            const id = uuidv4()
            const timestamp = Date.now()
            const { author, category } = this.state

            const { addPost } = this.props
            addPost({ id, timestamp, author, category, title, body })
                .then(() => history.push(`/post/edit/${id}`))
        }
    }

    render() {
        const { author, category, title, body } = this.state

        const { match, categories } = this.props
        const { postId } = match.params
        const isEditing = (postId && postId !== undefined)

        return (
            <Container grid="lg">
                <Columns>
                    <Col xs={12}>
                        <div className="newpost">
                            <LinkButton to="/" kind="link" className="newpost__backButton">
                                <Icon icon="back" />
                            </LinkButton>

                            <h1 className="ta-c">
                                Add post
                            </h1>

                            <p className="newpost__description">
                                Aliquam elementum malesuada lorem nec vehicula. Morbi nec diam tortor.
                                Fusce pulvinar dui non suscipit bibendum.
                            </p>

                            <form
                                onSubmit={this.handleSubmit.bind(this)}
                                className="newpost__form">

                                <Input
                                    id="title"
                                    placeholder="Title"
                                    inputClassName="newpost__input"
                                    value={title}
                                    onChangeValue={(title) => this.setState({ title })} />

                                {
                                    !isEditing &&
                                    <Input
                                        id="author"
                                        placeholder="Author"
                                        value={author}
                                        inputClassName="newpost__input"
                                        onChangeValue={(author) => this.setState({ author })} />
                                }

                                <TextArea
                                    id="message"
                                    value={body}
                                    inputClassName="newpost__input newpost__input--area"
                                    placeholder="Message"
                                    onChangeValue={(body) => this.setState({ body })} />

                                {
                                    !isEditing &&
                                    <Select
                                        value={category}
                                        placeholder="Choose a category"
                                        options={categories.map(category => {
                                            return { 
                                                value: category.path, 
                                                text: category.name 
                                            }
                                        })}
                                        onSelectValue={(category) => this.setState({ category })} />
                                }

                                <Button
                                    type="submit"
                                    size="lg"
                                    kind="primary"
                                    className="newpost_button">
                                    Save
                                </Button>
                            </form>
                        </div>
                    </Col>
                </Columns>
            </Container>
        )
    }
}

const mapStateToProps = ({ categories }) => ({
    categories: categories.categories
})

const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(postsActions.getPost(postId)),
    addPost: (post) => dispatch(postsActions.postPost(post)),
    updatePost: (postId, post) => dispatch(postsActions.putPost(postId, post))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)