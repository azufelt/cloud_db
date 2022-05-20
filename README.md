# Overview

As a software engineer it is most important to me to develop applications that matter, than contribute to making a difference in daily lives.

This is a restAPI that keeps track of To Do List items. It can be called from the frontend view of a program that allows the user to enter a To Do List item title, and a description. The list items are stored as objects in MongoDB, and can be returned as a response request for all items, a single item by using the objectID, or can also be edited or deleted using the same.

My 'To Do List' is a basic predecessor for a larger application that I am working on, which will allow a user to Make projects, and add sub-tasks to the Project. The goal of this project is to produce a project management application that focuses on the needs of small organizations with high role turn-over, prioritizing positions/roles within the organization versus the person, therefore allowing projects to not be interupted when new officers are onboarded.

Software Demo Video- https://youtu.be/rWBPvvLW6aw

# Cloud Database

This project uses MongoDB as the cloud database, utilizing a noSQL structure. MongoDB is a based on the document store data model -a document is stored in BSON format.

# Development Environment

Swagger.io was used to display and test endpoints and database functionality.
Express was used as the backend server.
MongoDB Compass was used to access the Database objects.
Node.js
dotenv
Mongoose

# Useful Websites

Some sites that were helpful:

- MongoDB https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial

- Geeks for Geeks https://www.geeksforgeeks.org/mongodb-insert-single-document-using-mongoshell/?ref=lbp

# Future Work

Tasks to finish integrating and add:

- User login
- Parent task "owner" (sort by theme, school, work, personal)
- Display tasks in Calendar Mode
