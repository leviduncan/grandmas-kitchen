import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import Recipes from './Recipes'
import SearchForm from './SearchForm'
import Brand from '../images/gLogo.png'

function Search() {

    require('dotenv').config()

    console.log(process.env.REACT_APP_APP_ID);

    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;


    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(20)

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=50`);
        const data = await response.json();
        setRecipes(data.hits);
    };

    useEffect(() => {
        getRecipes();
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    //Get current recipes
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

    //Change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return (
        <div>
            <div className="search-form py-4">
                <div className="container d-flex justify-content-between">
                    <div className="brand"><img src={Brand} alt="Grandma's Kitchen Brand Logo"/></div>
                    <SearchForm getSearch={getSearch} search={search} updateSearch={updateSearch} />
                </div>
            </div>
            
            <div className="container">
                <div className="row mt-5 py-5 text-center page-title">
                    <h1>Yummy {query} recipe ideas</h1>
                    <p>Bookmark this page to get all the latest and most tasty recipes from Grandma's Kitchen to yours.</p>
                </div>
            </div>
            <Recipes recipes={currentRecipes} />
            <Pagination
                recipesPerPage={recipesPerPage}
                totalRecipes={recipes.length}
                paginate={paginate} currentPage={currentPage}
            />
        </div>
    )
}

export default Search
