import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Linkcontainer = () => {
    return (
        <div>
            <nav>
                <NavLink to="link1">link1</NavLink>
                <NavLink to="link2">link2</NavLink>
            </nav>
            <Outlet />
        </div>

    )

}

export default Linkcontainer