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
- Responsive design 

## Screenshots
![image](https://github.com/jordanpapaditsas/jrpg-blog/assets/114758586/ab6b63a6-d745-486e-beb5-faab9faa1031)
![image](https://github.com/jordanpapaditsas/jrpg-blog/assets/114758586/16433be9-a4db-401d-b55b-613a4a0318d1)
![image](https://github.com/jordanpapaditsas/jrpg-blog/assets/114758586/605c0e15-51a2-417c-9112-212a3173ba52)
![image](https://github.com/jordanpapaditsas/jrpg-blog/assets/114758586/bb68f3c2-7c53-4549-b7fd-7b7997f39000)
![image](https://github.com/jordanpapaditsas/jrpg-blog/assets/114758586/0bc46908-5132-42d9-bd37-8a6b02eeedc0)
![image](https://github.com/jordanpapaditsas/jrpg-blog/assets/114758586/6cbf1b83-082d-4371-8446-2a1cb3f9457d)
![image](https://github.com/jordanpapaditsas/jrpg-blog/assets/114758586/78a82d1e-e307-4e86-ab53-db69f263fc10)
![image](https://github.com/jordanpapaditsas/jrpg-blog/assets/114758586/158ee63c-a797-44c2-9de7-73e9a39a2b0a)
![image](https://github.com/jordanpapaditsas/jrpg-blog/assets/114758586/eea7e3f6-ff42-4400-8fc9-9d9daa80dc74)
![image](https://github.com/jordanpapaditsas/jrpg-blog/assets/114758586/69659496-9e35-4e23-a3a7-69e9a4802d3e)
![image](https://github.com/jordanpapaditsas/jrpg-blog/assets/114758586/0cacf4d4-7648-46b0-b5b0-23061adc070d)










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
- Open 2 terminals 
- cd client in first terminal
- yarn start (starts the project)
- cd api in second terminal
- nodemon index.js (to run backend api for data)
```

## API Endpoints

- /post/:id (GET, POST, PUT, DELETE): CRUD operations for blog posts.
- /edit/:id (PUT) operation.
- /register (POST): Register a new user.
- /login (POST): Authenticate and log in a user.
- /logout (POST): Logs out the current user.
- /create (POST): Create a post.




