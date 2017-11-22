import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    posts as postsActions,
    categories as categoriesActions
} from '../../actions'
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
import Validator from 'validatorjs'
import uuidv4 from 'uuid/v4'
import './style.css'

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            author: '',
            category: '',
            title: '',
            body: '',
            formErrors: {}
        }
    }

    componentDidMount() {
        this.populateCategories()
        this.populatePost()
    }

    populateCategories() {
        const { categories, getCategories } = this.props
        if (categories.length <= 0) {
            getCategories()
        }
    }

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

    onSubmit(event) {
        event.preventDefault()

        if (this.isFormValid()) {
            this.sendPost()
        }
    }

    isFormValid() {
        const { title, author, body, category } = this.state
        const data = {
            title,
            author,
            category,
            message: body
        }

        const rules = {
            title: 'required',
            author: 'required',
            message: 'required',
            category: 'required'
        }

        const validation = new Validator(data, rules)

        if (validation.fails()) {
            this.setState({ formErrors: validation.errors.all() })
            return false
        }

        return true
    }

    sendPost() {
        const { match, history } = this.props
        const { postId } = match.params

        const { title, body } = this.state

        if (postId && postId !== undefined) {
            const { updatePost } = this.props
            updatePost(postId, { title, body })
        }
        else {
            const id = uuidv4()
            const timestamp = Date.now()
            const { author, category } = this.state

            const { addPost } = this.props
            addPost({
                id,
                timestamp,
                author,
                category,
                title,
                body
            }).then(() => {
                history.push('/')
            })
        }

    }

    render() {
        const {
            author,
            category,
            title,
            body,
            formErrors
        } = this.state

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
                                Start writing something. It'd be incredible if you could share some experiences with us
                            </p>

                            <form
                                onSubmit={this.onSubmit.bind(this)}
                                className="newpost__form">

                                <Input
                                    id="title"
                                    placeholder="Title"
                                    inputClassName="newpost__input"
                                    value={title}
                                    errors={formErrors}
                                    rules="required"
                                    onChangeValue={(title) => this.setState({ title })} />

                                {
                                    !isEditing &&
                                    <Input
                                        id="author"
                                        placeholder="Author"
                                        value={author}
                                        errors={formErrors}
                                        rules="required"
                                        inputClassName="newpost__input"
                                        onChangeValue={(author) => this.setState({ author })} />
                                }

                                <TextArea
                                    id="message"
                                    value={body}
                                    errors={formErrors}
                                    rules="required"
                                    inputClassName="newpost__input newpost__input--area"
                                    placeholder="Message"
                                    onChangeValue={(body) => this.setState({ body })} />

                                {
                                    !isEditing &&
                                    <Select
                                        id="category"
                                        value={category}
                                        errors={formErrors}
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
    updatePost: (postId, post) => dispatch(postsActions.putPost(postId, post)),
    getCategories: () => dispatch(categoriesActions.getCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)