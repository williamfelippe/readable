import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Columns, Col, Icon, Button, Input, TextArea, Select } from '../../components/Spectre'
import { posts as postsActions } from '../../actions'
import uuidv4 from 'uuid/v4'
import './style.css'

class NewPost extends Component {

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

        const title = ""
        const body = ""

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
            const author = ""
            const category = ""

            const { addPost } = this.props
            addPost({ id, timestamp, author, category, title, body })
                .then(() => history.push(`/post/edit/${id}`))
        }
    }

    render() {

        const { match } = this.props
        const { postId } = match.params

        const isEditing = (postId && postId !== undefined)

        return (
            <Container>
                <Columns>
                    <Col xs={12}>
                        <div className="newpost">
                            <Icon icon="back" className="newpost__backbutton" />

                            <h1 className="ta-c">
                                Add post
                            </h1>

                            <p className="newpost__description">
                                Aliquam elementum malesuada lorem nec vehicula. Morbi nec diam tortor.
                                Fusce pulvinar dui non suscipit bibendum.
                                Praesent condimentum ultrices ante id tempor.
                                Etiam volutpat dolor vestibulum dui viverra cursus
                            </p>

                            <form onSubmit={this.handleSubmit.bind(this)} className="newpost__form">

                                <Input id="title" placeholder="Title" />

                                {!isEditing && <Input id="author" placeholder="Author" />}

                                <TextArea id="message" placeholder="Message" />

                                {
                                    !isEditing && <Select placeholder="Choose a category" options={[
                                        { value: 'teste', text: 'Teste' },
                                        { value: 'teste2', text: 'Teste2' },
                                        { value: 'teste3', text: 'Teste3' }
                                    ]} />
                                }

                                <Button type="submit">
                                    Add
                                </Button>
                            </form>
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
    addPost: (post) => dispatch(postsActions.postPost(post)),
    updatePost: (postId, post) => dispatch(postsActions.updatePost(postId, post))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)