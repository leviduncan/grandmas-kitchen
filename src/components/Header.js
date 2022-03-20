import React from 'react'

function Header() {
    return (
        <>
                    <form onSubmit={getSearch} className="search-form py-4">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>

            
        </>
    )
}

export default Header
