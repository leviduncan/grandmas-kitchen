import React from 'react'
import Search from './Search'

function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <h1 className="text-center">Welcome to Grandma's Kitchen</h1>
                    </div>
                </div>
            </header>
            <Search />
        </>
    )
}

export default Header
