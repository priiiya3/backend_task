# AnswersAi Backend Service

Welcome to the AnswersAi Backend Service! This application is designed to provide a secure and scalable backend for handling questions and user management. It includes endpoints for managing questions, user accounts, authentication, and integrating with an AI service to generate answers.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Security](#security)
6. [Database](#database)
7. [Additional Notes](#additional-notes)
8. [Demo Video](#demo-video)

## Introduction

The AnswersAi Backend Service is built on Node.js and Express.js, providing a RESTful API to manage questions and user data. It includes authentication mechanisms using JWT tokens for secure API access. This service is designed to be used with a frontend application, although no frontend implementation is required for this assignment.

## Features

- **Question Management:**
  - POST `/api/questions`: Accepts user questions and returns AI-generated answers.
  - GET `/api/questions/:questionId`: Retrieves specific questions and answers by question ID.

- **User Management:**
  - POST `/api/users`: Creates a new user account.
  - GET `/api/users/:userId`: Retrieves user profile information by userId.
  - GET `/api/users/:userId/questions`: Retrieves all questions asked by a specific user.

- **Authentication:**
  - POST `/api/auth/login`: Allows users to log in and receive JWT tokens.
  - POST `/api/auth/logout`: Logs out the user and invalidates the tokens.
  - POST `/api/auth/refresh`: Refreshes the access token.


## Technologies Used

- Node.js
- Express.js
- PostgreSQL for database
- JWT for authentication
- Sequelize (optional) for ORM

## Setup Instructions

To set up this project locally, follow these steps:

1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. Set up PostgreSQL database and configure connection settings (`DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`) in `config.json` file.
4. Run database migrations if using Sequelize: `npx sequelize-cli db:migrate`.
5. Set up environment variables for JWT secret.
6. Run the application using `npm start`.


## Security

This service implements JWT tokens for authentication to ensure secure API access. Environment variables should be used for sensitive data such as database credentials and JWT secret.

## Database

The backend service uses PostgreSQL for storing user accounts, questions, and other data. The database schema is designed to be scalable, accommodating hundreds of thousands of users concurrently. Optionally, Sequelize is used as an ORM for database operations.


## Additional Notes

For any questions or issues regarding this backend service, please contact [priyasingh3709@gmail.com](mailto:priyasingh3709@gmail.com).



## Demo Video

Watch a demonstration of the AnswersAi Backend Service in action:
- [Watch Demo Video](https://youtu.be/Q3ZWUlxXR5k)