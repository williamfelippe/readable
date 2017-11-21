import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './style.css'

const CategoriesList = ({ categories }) => {

    const categoriesList = categories.map(({ name, path }) => {
        return (
            <li className="menu-item categoriesList__item" key={name}>
                <NavLink exact to={`/${path}`}>
                    {name}
                </NavLink>
            </li>
        )
    })

    return (
        <ul className="menu categoriesList">
            <li className="divider" data-content="Categories"></li>
            {categoriesList}
        </ul>
    )
}

CategoriesList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CategoriesList