import React from 'react'
import { Container, Columns, Col, LinkButton } from '../../components/Spectre'
import './style.css'

const NoMatch = () => {
    return (
        <Container grid="lg" className="nomatch">
            <Columns>
                <Col xs={12}>
                    <h1 className="nomatch__title">
                        404
                    </h1>

                    <p className="nomatch__description">
                        Ops... This page does not exist
                    </p>

                    <LinkButton to="/" kind="link" size="lg" className="nomatch__button">
                        Voltar
                    </LinkButton>
                </Col>
            </Columns>
        </Container>
    )
}

export default NoMatch