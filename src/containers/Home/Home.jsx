import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        return (
            <div>
                Alright, alright, alright
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Home)