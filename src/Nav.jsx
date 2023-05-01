import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Nav() {
    return (
        <>
            <NavLink to={'/home'} >
                home
            </NavLink>
            <br />
            <NavLink to={'/home/page1'} >
                page1
            </NavLink>
            <br />
            <NavLink to={'/home/page2'} >
                page2
            </NavLink>
            <br />
        </>
    )
}
