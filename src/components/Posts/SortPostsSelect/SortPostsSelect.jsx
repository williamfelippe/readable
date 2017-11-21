import React from 'react'
import { connect } from 'react-redux'
import { Select } from '../../Spectre'
import { posts as postsActions } from '../../../actions'
import './style.css'

const SortPostsSelect = ({ order, setPostsOrder }) => {
    return (
        <Select
            id="order"
            value={order}
            placeholder="Sort by"
            options={[
                {
                    value: 'timestamp',
                    text: 'Date'
                },
                {
                    value: 'voteScore',
                    text: 'Score'
                }
            ]}
            className="sortPosts"
            onSelectValue={setPostsOrder} />
    )
}

const mapStateToProps = ({ posts }) => {
    return {
        order: posts.order
    }
}

const mapDispatchToProps = dispatch => ({
    setPostsOrder: (order) => dispatch(postsActions.setPostsOrder(order))
})

export default connect(mapStateToProps, mapDispatchToProps)(SortPostsSelect)