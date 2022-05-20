require('dotenv').config()
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const session = require('express-session');
const MongoDB = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
// const PORT = 5000;

// prevents cross site request forgery attack
// https://www.geeksforgeeks.org/implementing-csurf-middleware-in-node-js/
const csurf = require('csurf');
// to store messages displayed to user
// https://www.npmjs.com/package/connect-flash
const flash = require('connect-flash');

// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

// routes
const taskRoute = require('./routes/task');

//connect to database
const MONGODB_URI = process.env.MONGODB_URI;
// deploy platform
const HOST_URL = process.env.HOST_URL;

// initialize object in db
const db = new MongoDB({
  uri: MONGODB_URI,
  tasks: []
});

// initialize app
const app = express();

// Swagger set up to test database endpoints
const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "To-Do List",
      version: "1.0.0",
      description: "A simple To Do task list"
    },
    servers: [{
      url: process.env.HOST_URL
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'Authorization',
        }
      }
    },
    security: [{
      bearerAuth: []
    }],
  },
  apis: ["./swagger/*.js"]
}

// Tell Swagger where/how to parse comments
const specs = swaggerJsdoc(options);
// Specifiy specs to build UI & view endpoints/API documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Allow requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//access in routes
app.db = db;

//parse json body of the request
app.use(express.json());
app.use(bodyParser.json());

// Using the routes as defined
app.use('/task', taskRoute);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message: message,
    data: data
  });
});

// CORS
const corsOptions = {
  origin: process.env.HOST_URL,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Connect to database
mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(PORT);
    console.log("Successfully connected to database");
  })
  .catch(err => {
    console.log(err);
  });