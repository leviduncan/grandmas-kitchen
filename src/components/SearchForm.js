import React from 'react'

function SearchForm({ getSearch, search, updateSearch }) {
    return (
        <form onSubmit={getSearch}>
            <input className="search-bar" type="text" value={search} onChange={updateSearch} />
            <button className="search-button" type="submit">Search</button>
        </form>
    )
}

export default SearchForm
