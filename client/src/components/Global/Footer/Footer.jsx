import React from 'react'
import { Container, Columns, Col } from '../../Spectre'
import UdacityLogo from '../../../assets/images/udacity_logo.png'
import './style.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Container grid="lg">
                <Columns>
                    <Col xl={8}>
                        <img 
                            src={UdacityLogo} 
                            alt="Udacity Logo" 
                            className="footer__udacityLogo" />
                    </Col>

                    <Col xl={4}>
                        <span className="footer__title">
                            Readable
                        </span>
                    </Col>
                </Columns>
            </Container>
        </footer>
    )
}

export default Footer