import React from 'react'
import Recipe from './Recipe'

function Recipes({recipes}) {
  return (
    <div className="container mt-5">
        <div className="row">
            {recipes.map((recipe) => (
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
  )
}

export default Recipes
