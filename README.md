# Airbnb - Full Stack Web Application

A full-stack Airbnb-inspired web application built using Node.js, Express.js, MongoDB, EJS, HTML, CSS, and JavaScript.

## Live Demo

https://airbnb-haon.onrender.com

## GitHub Repository

https://github.com/mujtaba15223/Airbnb

## Features

- User registration and login
- User authentication and authorization
- Session-based authentication
- Create, view, edit, and delete property listings
- Upload property images
- Add and delete reviews
- Property ratings
- Listing ownership authorization
- Review authorization
- MongoDB database integration
- Cloudinary image storage
- Server-side rendering using EJS
- Form validation
- Flash messages
- Error handling
- Responsive user interface

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- HTML
- CSS
- JavaScript
- Passport.js
- Express Session
- Joi
- Cloudinary
- Git
- GitHub
- Render

## Project Structure

Airbnb/
├── controllers/
├── init/
├── models/
├── public/
├── routes/
├── utils/
├── views/
├── .gitignore
├── Schema.js
├── app.js
├── cloudconfig.js
├── middleware.js
├── package.json
└── package-lock.json

## Installation

Clone the repository:

git clone https://github.com/mujtaba15223/Airbnb.git

Navigate to the project directory:

cd Airbnb

Install dependencies:

npm install

## Environment Variables

Create a .env file in the root directory.

Add your credentials:

ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

Do not commit the .env file or any sensitive credentials to GitHub.

## MongoDB

This project uses MongoDB Atlas as the database.

MongoDB stores:

- User information
- Property listings
- Property details
- Reviews
- Ratings
- Listing ownership information

Add your MongoDB Atlas connection string to the ATLASDB_URL environment variable.

## Cloudinary

Cloudinary is used for property image storage.

The required Cloudinary environment variables are:

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

## Run the Application

Start the application manually using:

node app.js

The application will run at:

http://localhost:8080

## Authentication

Authentication is implemented using Passport.js.

The application supports:

- User registration
- User login
- User logout
- Password authentication
- Session management
- Protected routes
- Authorization middleware

## Authorization

Users can only modify resources they are authorized to manage.

- Users can edit their own listings.
- Users can delete their own listings.
- Users can delete their own reviews.
- Protected actions require authentication.

## CRUD Operations

The application provides complete CRUD functionality for property listings.

### Create

Authenticated users can create property listings with details such as title, description, price, location, country, and image.

### Read

Users can browse all listings and view individual property details.

### Update

Authorized listing owners can edit their existing listings.

### Delete

Authorized listing owners can delete their own listings.

## Reviews and Ratings

Users can interact with properties through reviews and ratings.

Users can:

- Add reviews
- Add ratings
- View reviews
- Delete their reviews

## Image Upload

Property images are uploaded and stored using Cloudinary.

The image URL is associated with the corresponding property listing in MongoDB.

## Validation

The application uses validation for user input, property listings, reviews, and request data.

## Error Handling

The application handles:

- Invalid requests
- Validation errors
- Unauthorized access
- Missing resources
- Invalid routes
- Database errors

## Flash Messages

Flash messages provide feedback for actions such as registration, login, logout, listing creation, listing updates, listing deletion, review creation, and review deletion.

## Deployment

The application is deployed using Render.

Production stack:

Frontend: HTML, CSS, JavaScript, EJS
Backend: Node.js, Express.js
Database: MongoDB Atlas
Image Storage: Cloudinary
Deployment: Render

Live application:

https://airbnb-haon.onrender.com

## API Routes

Listing routes:

GET /listings
GET /listings/new
POST /listings
GET /listings/:id
GET /listings/:id/edit
PUT /listings/:id
DELETE /listings/:id

Review routes:

POST /listings/:id/reviews
DELETE /listings/:id/reviews/:reviewId

User routes:

GET /signup
POST /signup
GET /login
POST /login
GET /logout

## Security

The project follows basic security practices including:

- Environment variables for sensitive credentials
- Password authentication
- Session-based authentication
- Protected routes
- Authorization middleware
- Input validation
- MongoDB access control
- .gitignore for sensitive files

Never commit passwords, API keys, database credentials, session secrets, or other sensitive information to GitHub.

## Git Workflow

git add .
git commit -m "Update project"
git push origin main

## Future Improvements

- Advanced property search
- Search by location
- Price range filtering
- Property category filtering
- Sorting functionality
- Interactive maps
- Booking system
- Availability calendar
- Payment gateway integration
- Wishlist functionality
- User profile pages
- Owner dashboard
- Booking history
- Email notifications
- Admin dashboard

## Learning Outcomes

This project demonstrates practical experience with:

- Full-stack web development
- Node.js and Express.js
- MongoDB and Mongoose
- EJS server-side rendering
- MVC architecture
- RESTful routing
- CRUD operations
- Authentication and authorization
- Session management
- Form validation
- Error handling
- Cloudinary image uploads
- Git and GitHub
- Render deployment

## Requirements

- Node.js
- npm
- MongoDB Atlas account
- Cloudinary account

Check Node.js installation:

node -v

Check npm installation:

npm -v

## Complete Setup

git clone https://github.com/mujtaba15223/Airbnb.git
cd Airbnb
npm install
node app.js


## Author

Mohd Mujtaba



## License

This project is created for educational and portfolio purposes.
