import React from 'react'

const Pagination = ({ recipesPerPage, totalRecipes, paginate, currentPage }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
          pageNumbers.push(i)  
    }

    return (
        <div className="d-flex justify-content-center mt-3">
            <div className="nav">
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className={currentPage === number ? "page-item active" : "page-item"}>
                            <a onClick={() => paginate(number)} href="#" className="page-link">{number}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Pagination
