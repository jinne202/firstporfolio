import React , { memo } from 'react';
import { NavLink } from "react-router-dom";

const Navigation = memo(() => {
    return (
        <nav id="navigation">

            <NavLink to="/">
                Main
            </NavLink>
            <NavLink to="/contact">
                contact
            </NavLink>
            <NavLink to="/project">
                project
            </NavLink>
        </nav>
    )
})


export default Navigation