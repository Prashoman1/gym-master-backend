# Gym Master Backend

This is the backend service for the Gym Master application. It provides APIs for managing gym memberships, classes, and user information.

## Features

- User authentication and authorization
- Membership management
- Class scheduling and booking
- User profile management
- Diet Management
- Account Management
- Monthly Report
- GYM New Member admission

## Technologies Used

- Node.js
- Express.js
- MongoDB
- TypeScript
- Zod validation
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gym-master-backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd gym-master-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/gym-master
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application

1. Start the server:
   ```bash
   npm start
   ```
2. The server will be running on `http://localhost:5000`.

## API Documentation

For detailed API documentation, refer to the [API Docs](./docs/api.md).

## Contributing

Contributions are welcome! Please read the [contributing guidelines](./CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

# Group Module API Documentation

This API provides functionality to manage groups, including creating, fetching, updating, and deleting groups.

## Table of Contents

- [Endpoints](#endpoints)
  - [Create Group](#create-group)
  - [Get Group(s)](#get-groups)
  - [Update Group](#update-group)
  - [Delete Group](#delete-group)
- [Error Handling](#error-handling)
- [Global Error Response](#global-error-response)
- [Setup and Usage](#setup-and-usage)

---

## Endpoints

### Create Group

- **URL:** `/api/group/create`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Group Name"
  }
  ```
- **Response:**
  ```json
  {
    "statusCode": 201,
    "success": true,
    "message": "Group created successfully",
    "data": {
      "_id": "group_id",
      "name": "Group Name",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```

---

### Get Group(s)

- **URL:** `/api/group/get/:id?`
  - Optional `id` parameter to fetch a specific group.
- **Method:** `GET`
- **Response:**
  ```json
  {
    "statusCode": 200,
    "success": true,
    "message": "Group fetched successfully",
    "data": [
      {
        "_id": "group_id",
        "name": "Group Name",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    ]
  }
  ```

---

### Update Group

- **URL:** `/api/group/update/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "name": "Updated Group Name"
  }
  ```
- **Response:**
  ```json
  {
    "statusCode": 200,
    "success": true,
    "message": "Group updated successfully",
    "data": {
      "_id": "group_id",
      "name": "Updated Group Name",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```

---

### Delete Group

- **URL:** `/api/group/delete/:id`
- **Method:** `DELETE`
- **Response:**
  ```json
  {
    "statusCode": 200,
    "success": true,
    "message": "Group deleted successfully",
    "data": {
      "_id": "group_id",
      "name": "Group Name",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```

---


# Specialization Module API Documentation

This API provides functionality to manage specialization, including creating, fetching, updating, and deleting specializations.

## Table of Contents

## Table of Contents

- [Endpoints](#endpoints)
  - [Create Specialization](#create-specialization)
  - [Get Specialization(s)](#get-specializations)
  - [Update Specialization](#update-specialization)
  - [Delete Specialization](#delete-specialization)
- [Error Handling](#error-handling)
- [Global Error Response](#global-error-response)
- [Setup and Usage](#setup-and-usage)

---

## Endpoints

### Create Specialization

- **URL:** `/api/specializations/store`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Specialization Name",
    "description": "Specialization Description"
  }
- **Response:**
```json
{
"statusCode": 201,
"success": true,
"message": "Specialization created successfully",
"data": {
  "_id": "specialization_id",
  "name": "Specialization Name",
  "description": "Specialization Description",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
}
```
  ```

---

### Get Specialization(s)

- **URL:** `/api/specializations/get/:id?`
  - Optional `id` parameter to fetch a specific group.
- **Method:** `GET`
- **Response:**
  ```json
  {
  "statusCode": 200,
  "success": true,
  "message": "Specialization fetched successfully",
  "data": [
    {
      "_id": "specialization_id",
      "name": "Specialization Name",
      "description": "Specialization Description",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  ]
}
  ```

---

### Update Specialization

- **URL:** `/api/specializations/update/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
```json
{
  "name": "Updated Specialization Name",
  "description": "Updated Specialization Description"
}
```
  ```
- **Response:**
  ```json
  {
  "statusCode": 200,
  "success": true,
  "message": "Specialization updated successfully",
  "data": {
    "_id": "specialization_id",
    "name": "Updated Specialization Name",
    "description": "Updated Specialization Description",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
  ```

---

### Delete Specialization

- **URL:** `/api/specializations/delete/:id`
- **Method:** `DELETE`
- **Response:**
  ```json
```json
{
"statusCode": 200,
"success": true,
"message": "Specialization deleted successfully",
"data": {
  "_id": "specialization_id",
  "name": "Specialization Name",
  "description": "Specialization Description",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
}
```
  ```

---
## Validation Handling

- `name`: required
- `description`: required

## Error Handling

The application uses a global error handling middleware to provide consistent error responses. Types of errors include:

- Validation errors
- Cast errors (e.g., invalid `id` format)
- Duplicate key errors

### Global Error Response Structure

```json
{
  "success": false,
  "message": "Error message",
  "errorSources": [
    {
      "path": "Field path",
      "message": "Detailed error message"
    }
  ],
  "stack": "Error stack trace"
}
```
