import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, LinkButton, Icon } from '../../Spectre'
import {
    confirmRemovalPostModal as confirmRemovalPostModalActions
} from '../../../actions'
import './style.css'

const PostActions = ({
    withCategory,
    postId,
    commentsLength,
    category,
    openModal
}) => {
    return (
        <ul className="postActions">
            <li className="postActions__item">
                <LinkButton
                    kind="link"
                    to={`/post/edit/${postId}`}
                    className="tooltip"
                    data-tooltip="Edit post">
                    <Icon icon="edit" />
                </LinkButton>
            </li>
            <li className="postActions__item">
                <Button
                    kind="link"
                    onClick={() => openModal(postId)}
                    className="tooltip"
                    data-tooltip="Delete post">
                    <Icon icon="delete" />
                </Button>
            </li>
            <li className="postActions__item">
                <Button
                    kind="link"
                    className="tooltip"
                    data-tooltip="Comments">
                    <Icon icon="message" /> <small>
                        {commentsLength} comments
                    </small>
                </Button>
            </li>
            <li className="postActions__item">
                {withCategory &&
                    <span className="label label-primary postActions__item__label">
                        {category}
                    </span>
                }
            </li>
        </ul>
    )
}

PostActions.defaultProps = {
    withCategory: true
}

PostActions.propTypes = {
    withCategory: PropTypes.bool,
    postId: PropTypes.string.isRequired,
    commentsLength: PropTypes.number.isRequired,
    category: PropTypes.string
}

const mapDispatchToProps = (dispatch) => ({
    openModal: (postId) => dispatch(confirmRemovalPostModalActions.openModal(postId))
})

export default connect(null, mapDispatchToProps)(PostActions)