import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Columns, Col, LinkButton } from '../../Spectre'
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <Container grid="lg">
                <Columns>
                    <Col xl={6}>
                        <NavLink to="/" exact className="header__title">
                            Readable
                        </NavLink>
                    </Col>
                    <Col xl={6}>
                        <LinkButton
                            kind="primary"
                            to="/post/new"
                            className="float-right">
                            Add post
                        </LinkButton>
                    </Col>
                </Columns>
            </Container>
        </header>
    )
}

export default Header