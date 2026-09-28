Airbnb Full Stack Web Application

A full-stack Airbnb-inspired web application built using Node.js,
Express.js, MongoDB, EJS, HTML, CSS, and JavaScript.

Features

User registration and login

User authentication and authorization

Create, edit, and delete property listings

View property details

Upload property images

Add and delete reviews

Rating system

MongoDB database integration

Server-side rendering using EJS

Responsive and user-friendly interface

Session and flash message handling

Tech Stack

Frontend: HTML, CSS, JavaScript, EJS

Backend: Node.js, Express.js

Database: MongoDB

Authentication: Passport.js

Templating: EJS

Version Control: Git and GitHub

Project Structure

Airbnb/
│
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

Installation

Clone the repository:

git clone https://github.com/mujtaba15223/Airbnb.git

Go to the project directory:

cd Airbnb

Install dependencies:

npm install

Environment Variables

Create a .env file in the root directory and add your MongoDB
connection string and other required credentials.

Example:

ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

Run the Application

Start the application manually using:

node app.js

The application will run on:

http://localhost:8080

Database

This project uses MongoDB to store:

User information

Property listings

Reviews

Ratings

Make sure your MongoDB database is running and the connection string is
correctly configured before starting the application.

Author

Mohd Mujtaba

GitHub: https://github.com/mujtaba15223
