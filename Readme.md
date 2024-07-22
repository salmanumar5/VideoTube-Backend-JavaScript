# Video Sharing Application Backend

Welcome to the backend repository for the Video Sharing Application. This Node.js application provides the server-side logic and API endpoints for a video sharing platform. It utilizes MongoDB for data storage, Multer for file uploads, and Cloudinary for media management.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure login and registration with JWT-based authentication.
- **Video Management:** Upload, retrieve, and delete videos.
- **Commenting System:** Add, update, and delete comments on videos.
- **Like System:** Like and unlike videos.
- **Search Functionality:** Search videos by title, tags, or user.
- **Media Storage:** Uses Multer for handling file uploads and Cloudinary for storing media files.

## Technologies

- **Node.js:** JavaScript runtime environment for building the server-side application.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing user and video data.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Multer:** Middleware for handling file uploads.
- **Cloudinary:** Cloud-based service for media management.
- **JWT:** JSON Web Token for authentication and authorization.

## Installation

To get started with the backend project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/video-sharing-backend.git

2.  **Navigate to the project directory:**

    bash
    `cd video-sharing-backend`

3.  **Install dependencies:**

    bash
    `npm install`

## Configuration

Before running the application, you need to configure the environment variables. Create a `.env` file in the root directory and include the following variables:
`PORT=3000 MONGO_URI=your_mongodb_connection_string CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name CLOUDINARY_API_KEY=your_cloudinary_api_key CLOUDINARY_API_SECRET=your_cloudinary_api_secret JWT_SECRET=your_jwt_secret`

Replace the placeholder values with your actual credentials.

## Usage

To start the server, run:

bash
`npm start`

The application will be available at [http://localhost:3000](http://localhost:3000) by default. You can change the port by modifying the `PORT` environment variable.

## API Documentation

The API provides several endpoints for user and video management:

### Authentication

-   **POST** `/api/auth/register`: Register a new user.
-   **POST** `/api/auth/login`: Authenticate a user and receive a JWT token.

### Videos

-   **POST** `/api/videos/upload`: Upload a new video.
-   **GET** `/api/videos/:id`: Retrieve a video by its ID.
-   **DELETE** `/api/videos/:id`: Delete a video by its ID.

### Comments

-   **POST** `/api/videos/:id/comments`: Add a comment to a video.
-   **PUT** `/api/comments/:commentId`: Update a comment.
-   **DELETE** `/api/comments/:commentId`: Delete a comment.

### Likes

-   **POST** `/api/videos/:id/like`: Like a video.
-   **POST** `/api/videos/:id/unlike`: Unlike a video.

### Search

-   **GET** `/api/videos/search`: Search for videos by title, tags, or user.

## Testing

To run tests, make sure all dependencies are installed and execute:

bash
`npm test`

Tests are written using Mocha and Chai.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a new branch:

    bash
    `git checkout -b feature/your-feature`

3.  Commit your changes:

    bash
    `git commit -am 'Add new feature'`

4.  Push to the branch:

    bash
    `git push origin feature/your-feature`

5.  Create a new Pull Request.

