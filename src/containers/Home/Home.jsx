import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Toast } from 'react-materialize'

class Home extends Component {
    render() {
        return (
            <div>
                <Button>Teste</Button>

                <Toast toast="here you go!">
                    Toast
                </Toast>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Home)