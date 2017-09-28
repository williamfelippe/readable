import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../Spectre'

const PostItem = ({ post }) => {
    return (
        <div className="tile">
            <div className="tile-icon">
                <figure 
                    className="avatar avatar-xl" 
                    data-initial="YZ" 
                    style={{backgroundColor: '#5764c6'}} />
            </div>
            <div className="tile-content">
                <p className="tile-title">
                    The Avengers
                </p>
                <p className="tile-subtitle text-gray">
                    Earth's Mightiest Heroes joined forces to take on threats that were too big 
                    for any one hero to tackle...
                </p>
            </div>
            <div className="tile-action">
                <Button kind="primary">Join</Button>
                <Button>Contact</Button>
            </div>
        </div>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostItem