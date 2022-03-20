import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'



function Search() {

    require('dotenv').config()

    console.log(process.env.REACT_APP_APP_ID);

    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=9`);
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    return (
        <div>
            <form onSubmit={getSearch} className="search-form py-4">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="container">
                <div className="row mt-5 text-center">
                    <h2>Yummy {query} recipe ideas</h2>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {recipes.map(recipe => (

                        <Recipe
                            key={recipe.recipe.label}
                            title={recipe.recipe.label}
                            calories={Math.floor(recipe.recipe.calories)}
                            image={recipe.recipe.image}
                            info={recipe.recipe.healthLabel}
                            ingredients={recipe.recipe.ingredients}
                            diet={recipe.recipe.dietLabels}
                            yieldFor={recipe.recipe.yield}
                            source={recipe.recipe.source}
                            totalTime={recipe.recipe.totalTime}
                            cuisineType={recipe.recipe.cuisineType}
                            url={recipe.recipe.url}

                        />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search