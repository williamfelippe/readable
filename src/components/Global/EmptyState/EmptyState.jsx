import React from 'react'
import { Icon, LinkButton } from '../../Spectre'
import './style.css'

const EmptyState = () => {
    return (
        <div className="empty emptyState">
            <div className="empty-icon">
                <Icon icon="message" className="emptyState__icon" />
            </div>
            <p className="empty-title h2">
                There is no posts here
            </p>
            <p className="empty-subtitle">
                Be the first to post something.
            </p>
            <div className="empty-action emptyState__button">
                <LinkButton to="/post/new" kind="primary">
                    Add post
                </LinkButton>
            </div>
        </div>
    )
}

export default EmptyState