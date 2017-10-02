import React from 'react'
import { Container, Columns, Col } from '../../Spectre'
import './style.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Container grid="lg">
                <Columns>
                    <Col xs={8}>
                    
                    </Col>

                    <Col xs={4}>
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