import React from 'react'
import { Icon, LinkButton } from '../../Spectre'
import './style.css'

const PostDeleted = () => {
    return (
        <div className="empty postDeleted">
            <div className="empty-icon">
                <Icon icon="stop" 
                    className="postDeleted__icon" />
            </div>
            <p className="empty-title h2">
                Post deleted
            </p>
            <p className="empty-subtitle">
                This post does not exist anymore.
            </p>
            <div className="empty-action postDeleted__button">
                <LinkButton to="/" kind="primary">
                    Back to home
                </LinkButton>
            </div>
        </div>
    )
}

export default PostDeleted