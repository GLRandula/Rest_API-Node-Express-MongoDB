# Node.js/Express.js REST API with MongoDB

This project is a REST API built using Node.js, Express.js, and MongoDB. It provides CRUD (Create, Read, Update, Delete) operations for managing a collection of products.

---

## Features

- Create a new product
- Read all products
- Update a product by ID
- Delete a product by ID

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- A package manager ([npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/))

---

## Installation

1. Clone this repository:
   ```bash
   git clone <[repository-url](https://github.com/GLRandula/Rest_API-Node-Express-MongoDB.git)>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the project root and add the following:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/your-database-name
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:3000` by default.

---

## API Endpoints

### **Base URL:**
`http://localhost:3000`

### **Routes:**

#### 1. Create a Product
- **URL:** `/create`
- **Method:** `POST`
- **Description:** Add a new product to the database.
- **Request Body:**
  ```json
  {
    "name": "string",
    "price": "number",
    "description": "string"
  }
  ```
- **Response:**
  - `201 Created` on success.
  - `400 Bad Request` if the data is invalid.

#### 2. Read All Products
- **URL:** `/read`
- **Method:** `GET`
- **Description:** Fetch all products from the database.
- **Response:**
  ```json
  [
    {
      "_id": "string",
      "name": "string",
      "price": "number",
      "description": "string"
    }
  ]
  ```

#### 3. Update a Product
- **URL:** `/update/:id`
- **Method:** `PUT`
- **Description:** Update an existing product by its ID.
- **Request Body:**
  ```json
  {
    "name": "string",
    "price": "number",
    "description": "string"
  }
  ```
- **Response:**
  - `200 OK` on success.
  - `404 Not Found` if the product does not exist.

#### 4. Delete a Product
- **URL:** `/delete/:id`
- **Method:** `DELETE`
- **Description:** Delete a product by its ID.
- **Response:**
  - `200 OK` on success.
  - `404 Not Found` if the product does not exist.

---

## Project Structure

```
├── server.js            # Entry point for the application
├── routes/
│   └── productRoutes.js # Routes for handling product API requests
├── controllers/
│   └── productController.js # Controller logic for products
├── models/
│   └── productModel.js  # Mongoose schema for products
├── .env                 # MongoDB connection setup
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

---

## Scripts

- **Start Server:**
  ```bash
  npm start
  ```
- **Run in Development Mode (with Nodemon):**
  ```bash
  npm run dev
  ```

---

## Technologies Used

- **Backend Framework:** Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Environment Management:** dotenv

---

## Error Handling

The API implements basic error handling to ensure meaningful responses for clients. Common error codes include:

- `400 Bad Request`: Invalid input data
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server issues

---

## Contribution

Contributions are welcome! If you find any issues or want to add new features:

1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes
4. Push to the branch
5. Open a pull request

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
