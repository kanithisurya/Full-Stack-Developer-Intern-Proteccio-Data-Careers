# Full-Stack-Developer-Intern-Proteccio-Data-Careers
A full-stack Leave Management System built with React.js, Node.js, Express.js, and MySQL featuring JWT authentication, role-based access control, and employee/manager leave management.

# Leave Management System

A full-stack Leave Management System developed using React.js, Node.js, Express.js, and MySQL. The application enables employees to apply for leave, view leave history, and manage leave requests, while managers can review, approve, or reject leave applications through a secure role-based dashboard.

The project implements JWT-based authentication, password encryption using bcrypt, RESTful APIs, and a MySQL database to provide a secure and scalable leave management solution.

Project Description

Explain in a few sentences what the application does.

Example:

The Leave Management System is a full-stack web application that allows employees to apply for leave and managers to approve or reject leave requests. The application uses React.js for the frontend, Node.js and Express.js for the backend, MySQL as the database, JWT authentication, and role-based authorization.

Technologies Used
React.js
Node.js
Express.js
MySQL
JWT
bcrypt
Bootstrap
Axios
Features

Mention completed features, for example:

Employee Registration
Employee Login
Manager Login
JWT Authentication
Role-Based Authentication
Apply Leave
View Leave History
Update Leave
Cancel Leave
Manager Approval
Manager Rejection
Dashboard APIs (if completed)
Installation

Frontend:

cd leave-management-system
npm install
npm run dev

Backend:

cd backend
npm install
npm run dev
They asked for:

Swagger or
Postman Collection

The easiest option is a Postman Collection.

Export your Postman/Thunder Client requests (if supported) or recreate them in Postman and export the collection.

Include endpoints like:

Method	Endpoint
POST	/api/auth/register
POST	/api/auth/login
POST	/api/leaves
GET	/api/leaves
GET	/api/leaves/:id
PUT	/api/leaves/:id
DELETE	/api/leaves/:id
GET	/api/manager/pending-leaves
PUT	/api/manager/approve/:id
PUT	/api/manager/reject/:id
