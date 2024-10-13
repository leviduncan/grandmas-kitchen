Built this app using create-react app
The app uses the edamam food api
Used React Hooks, Bootstrap for styling and dotenv for app key security


Recipe Finder
================
A web application for searching and browsing recipes using an open-source food API.
Table of Contents
-----------------
Overview
--------
Recipe Finder is a personal project designed to simplify meal planning and discovery. This application utilizes an open-source food API to provide users with a vast collection of recipes.
Features
--------
Search bar with real-time suggestions and filtering
Pagination for efficient browsing of recipe results
Detailed recipe views with ingredients, instructions, and nutritional information
Responsive design for accessibility on various devices
Fast and secure API integration using Node.js and Express
Tech Stack
------------
Frontend: React
Backend: Node.js, Express
API: Open-source food API (Edamam)
Database: N/A (API-based data retrieval)
Installation
------------
To run Recipe Finder locally:
Clone the repository: git clone https://github.com/dleviduncan/grandmas-kitchen.git
Install dependencies: npm install
Start the server: npm start
Open your browser at http://localhost:3000
Usage
-----
Search for recipes using the search bar
Browse through recipe results using pagination
View detailed recipe information by clicking on a recipe card
Challenges and Solutions
------------------------
Challenge: Handling API rate limits and optimizing search performance.
Solution: Implemented debouncing and caching mechanisms to reduce API requests and improve search responsiveness.
Challenge: Managing state and props in the React application.
Solution: Utilized React Hooks (useState, useEffect) to efficiently manage component state and optimize rendering.
Future Development
------------------
Implement user authentication for saved recipes and personalized meal planning
Integrate social sharing features for recipes
Expand API integration to include additional recipe sources
Screenshots
------------
Search Bar and Results
!
Recipe Detail View
!
Pagination and Responsive Design
!
License
-------