import React from 'react'
import { Icon, LinkButton } from '../../Spectre'

const EmptyState = () => {
    return (
        <div className="empty">
            <div className="empty-icon">
                <Icon icon="message" />
            </div>
            <p className="empty-title h5">
                There is no posts here
            </p>
            <p className="empty-subtitle">
                Be the first to post something.
            </p>
            <div className="empty-action">
                <LinkButton to="/post/new" kind="primary">
                    Add post
                </LinkButton>
            </div>
        </div>
    )
}

export default EmptyState