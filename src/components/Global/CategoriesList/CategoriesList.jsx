import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const CategoriesList = ({ categories }) => {

    const categoriesList = categories.map(({ name, path }) => {
        return (
            <li className="menu-item" key={name}>
                <NavLink exact to={`/${path}`}>
                    {name.charAt(0).toLocaleUpperCase()}{name.slice(1)}
                </NavLink>
            </li>
        )
    })

    return (
        <ul className="menu">
            <li className="divider" data-content="Categories"></li>
            {categoriesList}
        </ul>
    )
}

CategoriesList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CategoriesList