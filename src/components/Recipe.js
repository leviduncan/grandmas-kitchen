import React from 'react';
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipeCard from './RecipeCard';

const Recipe = ({ title, calories, image, info, ingredients, diet, yieldFor, source, totalTime, cuisineType, url}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="col-12 col-md-6 col-lg-3">
                <RecipeCard handleShow={handleShow} 
                title={title} calories={calories} image={image} info={info} ingredients={ingredients} diet={diet} yieldFor={yieldFor} source={source} totalTime={totalTime} cuisineType={cuisineType} url={url}
                />
                
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><h5 className="card-title">{title} Ingredients</h5> </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Calories: </strong>{calories}</p>
                        <p><strong>Perfect dish for: </strong>{yieldFor}</p>
                        <ol>
                            {ingredients.map(ingredient => (
                                <li>{ingredient.text}</li>
                            ))}
                        </ol>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};

export default Recipe;