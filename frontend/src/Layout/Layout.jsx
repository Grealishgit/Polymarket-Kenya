import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <div>
            <Outlet context={{ darkMode, setDarkMode }} />
        </div>
    )
}

export default Layout