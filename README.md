"# express-api" 

# Awesome Node.js Express CRUD API with Mongoose 🚀

A simple and powerful CRUD (Create, Read, Update, Delete) API built using Node.js, Express, and Mongoose. This project serves as a foundation for creating RESTful APIs with MongoDB integration.

## Features

- **Create:** Add new items to your database.
- **Read:** Retrieve and view existing data from the database.
- **Update:** Modify and update records in the database.
- **Delete:** Remove unwanted items from the database.

## Technologies Used

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose:** Elegant MongoDB object modeling for Node.js.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed.
- MongoDB server running.

## Getting Started

1. Clone the repository:

   ```bash
    git clone https://github.com/manuel-spec/express-api.git
    ```
2. Configure the MongoDB connection in .env : the basic setup is done as example in .env.examples

3. Run the application:
    ``` bach 
    npm start```

Your CRUD API is now live at `http://localhost:3000`.


API Endpoints
    ```bash
    POST /api/article: Create a new item.
    GET /api/article: Get all items.
    GET /api/article/:id: Get a specific item by ID.
    PUT /api/article/:id: Update a specific item by ID.
    DELETE /api/article/:id: Delete a specific item by ID.

    ```

Contribution

Feel free to contribute and make this project even more awesome! Fork the repository, create a new branch, make your changes, and submit a pull request.
