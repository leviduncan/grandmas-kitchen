import React from 'react'
import Button from 'react-bootstrap/Button'

function RecipeCard({ handleShow, title, calories, image, info, ingredients, diet, yieldFor, source, totalTime, cuisineType, url }) {
    return (
        <div className="card mb-5">
            <div className="overflow">
                <img src={image} className="card-img-top" alt={title}></img>
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <div className="card-text">{info}

                    <p>
                        Only {calories} Calories<br />
                        <i className="fas fa-clock"> </i> <strong> Cooking Time: </strong> {totalTime} mins<br />
                        <i class="fas fa-utensils"></i> <strong> Cuisine: </strong> {cuisineType}<br />
                        <i class="fa-solid fa-up-right-from-square"></i> <a href={url} target="_blank">By {source}</a>
                    </p>
                </div>
                <div className="text-center">
                <Button variant="primary" onClick={handleShow}>
                    View ingredients
                        </Button>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
