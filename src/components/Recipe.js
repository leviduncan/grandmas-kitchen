import React from 'react';
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

const Recipe = ({ title, calories, image, info, ingredients, diet, yieldFor, source, totalTime, cuisineType, url}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="col col-sm-4">
                <div className="card mb-5 shadow">
                    <div className="overflow">
                        <img src={image} className="card-img-top" alt={title}></img>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <div className="card-text">{info}<hr />

                            <p>
                                Only {calories} Calories<br />
                                <i className="fas fa-clock"> </i> <strong> Cooking Time: </strong> {totalTime} mins<br />
                                <i class="fas fa-utensils"></i> <strong> Cuisine: </strong> {cuisineType}<br />
                                <i class="fa-solid fa-up-right-from-square"></i> <a href={url} target="_blank">By {source}</a>
                            </p>
                        </div>
                        <Button variant="primary" onClick={handleShow}>
                            View the ingredients
                        </Button>
                    </div>
                </div>
                
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