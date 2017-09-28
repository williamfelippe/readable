import React from 'react'
import { Container, Columns, Col, LinkButton, Icon } from '../../Spectre'
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <Container grid="lg">
                <Columns>
                    <Col xs={6}>
                        <span className="header__title">
                            Readable
                        </span>
                    </Col>
                    <Col xs={6}>
                        <LinkButton to="/post/new" className="float-right">
                            Add post <Icon icon="plus" />
                        </LinkButton>
                    </Col>
                </Columns>
            </Container>
        </header>
    )
}

export default Header