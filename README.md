# JRPG-Blog    Coding Factory Final Project

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The project includes CRUD operations, user authentication,Form validations, Database for storing data, and JSON Web Token (JWT) validations.
Created for Coding Factory Final Project.

## Table of Contents

- [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)

## Features

- User registration and login
- Form validation with notifications
- MongoDB Database for storing data
- CRUD operations for blog posts
- JWT-based authentication
- Responsive design (if applicable)

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Visual Studio Code

## Installation 

1. Clone the repository:
```md
 git clone https://github.com/jordanpapaditsas/jrpg-blog.git
 ```
2. Navigate to the clone project directory:
 ```md
 cd jrpg-blog
 ```
3. Install Node.js and yarn (donwload and install from https://nodejs.org/en)  

4. Install Project Dependencies
```md
- yarn install
- yarn add nodemon
- yarn add cors
- yarn add mongoose
- yarn add bcryptjs
- yarn add jsonwebtoken
- yarn add cookie-parser
- yarn add dotenv
```
5. Build the project
```md
yarn start
```

## API Endpoints

- /post/:id (GET, POST, PUT, DELETE): CRUD operations for blog posts.
- /edit/:id (PUT) operation.
- /register (POST): Register a new user.
- /login (POST): Authenticate and log in a user.
- /logout (POST): Logs out the current user.
- /create (POST): Create a post.




