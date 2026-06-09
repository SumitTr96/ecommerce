# MERN Ecommerce Platform

## Overview

A full-stack Ecommerce application built using the MERN stack (MongoDB, Express.js, React, and Node.js) with TypeScript support. The platform provides secure user authentication, product management, shopping cart functionality, order processing, and an administrative dashboard for managing products, users, and orders.

The application follows a modular architecture with separate frontend and backend services, role-based authorization, OTP-based verification, JWT authentication, and image upload support.

---

## Features

### User Features

* User Registration
* Email OTP Verification
* User Login
* JWT Authentication
* Protected Routes
* Product Browsing
* Product Search
* Product Filtering by Category
* Product Details Page
* Shopping Cart Management
* Checkout Functionality
* Order Placement
* Order History
* Order Details View

### Admin Features

* Admin Dashboard
* Product Management (Create, Read, Update, Delete)
* Product Image Upload
* User Management
* Delete Users
* View All Orders
* Update Order Status
* Role-Based Access Control

### Security Features

* Password Hashing using bcryptjs
* JWT Authentication
* HTTP-only Cookies
* OTP Verification
* Role-Based Authorization
* Request Validation using Zod
* Protected Backend Routes

---

## Tech Stack

### Frontend

* React
* TypeScript
* Redux Toolkit
* React Router
* React Hook Form
* Axios
* Tailwind CSS
* Zod

### Backend

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Nodemailer
* Multer

---

## Project Structure


ecommerce
├── client
│   └── src
│       ├── api
│       ├── app
│       ├── components
│       │   └── admin
│       ├── features
│       │   ├── auth
│       │   ├── cart
│       │   ├── order
│       │   └── product
│       ├── hooks
│       ├── layouts
│       ├── pages
│       │   └── admin
│       ├── routes
│       ├── types
│       └── utils
└── server
    ├── src
    │   ├── config
    │   ├── controllers
    │   ├── middleware
    │   ├── models
    │   ├── routes
    │   ├── seed
    │   ├── services
    │   ├── types
    │   ├── utils
    │   └── validators
    └── uploads


---

## Installation

### Clone Repository


git clone https://github.com/SumitTr96/ecommerce.git

cd ecommerce


---

## Backend Setup

**Navigate to the server folder:**


cd server


Install dependencies:


npm install


**Create a `.env` file:**


PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email

EMAIL_PASS=your_email_app_password


**Start backend:**


npm run dev


**Backend runs on:**


http://localhost:5000


---

## Frontend Setup

Navigate to client:


cd client


Install dependencies:


npm install


Start frontend:


npm run dev


Frontend runs on:


http://localhost:5173


---

## Environment Variables

### Server


PORT=

MONGO_URI=

JWT_SECRET=

EMAIL_USER=

EMAIL_PASS=


---

## Database Design

### User


_id
name
email
password
role
isVerified
otp
otpExpiry


### Product


_id
name
description
category
image
price
stock


### Cart


_id
user
items[]


### Order


_id
user
items[]
totalAmount
status


### Relationships

```text
User (1) ────── (N) Orders

User (1) ────── (1) Cart

Order (1) ────── (N) Products

Cart (1) ────── (N) Products


---

## API Summary

### Authentication

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | /api/auth/register   |
| POST   | /api/auth/verify-otp |
| POST   | /api/auth/login      |
| GET    | /api/auth/me         |
| POST   | /api/auth/logout     |

### Products

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/products     |
| GET    | /api/products/:id |
| POST   | /api/products     |
| PUT    | /api/products/:id |
| DELETE | /api/products/:id |

### Cart

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /api/cart      |
| POST   | /api/cart/sync |
| PUT    | /api/cart      |
| DELETE | /api/cart      |

### Orders

| Method | Endpoint        |
| ------ | --------------- |
| POST   | /api/orders     |
| GET    | /api/orders     |
| GET    | /api/orders/:id |

### Admin

| Method | Endpoint                     |
| ------ | ---------------------------- |
| GET    | /api/admin/users             |
| DELETE | /api/admin/users/:id         |
| GET    | /api/admin/orders            |
| PUT    | /api/admin/orders/:id/status |



## Architecture

### Frontend

The frontend uses React with TypeScript and Redux Toolkit. State management is centralized using Redux Toolkit slices for authentication, products, cart, and orders.

### Backend

The backend follows a layered architecture:


Routes
   ↓
Controllers
   ↓
Services
   ↓
Models


Middleware handles:

* Authentication
* Authorization
* Error Handling
* File Uploads

### Authentication Flow


Register
   ↓
Email OTP Verification
   ↓
Login
   ↓
JWT Token
   ↓
Protected Routes


### Authorization Flow


User
  ↓
Protect Middleware
  ↓
Admin Middleware
  ↓
Admin Routes


---

## Evaluation Criteria Coverage

| Requirement              | Status |
| ------------------------ | ------ |
| Authentication           | ✅      |
| User Registration        | ✅      |
| OTP Verification         | ✅      |
| JWT Authentication       | ✅      |
| Protected Routes         | ✅      |
| Role-Based Authorization | ✅      |
| Product CRUD             | ✅      |
| Cart Management          | ✅      |
| Order Management         | ✅      |
| Product Image Upload     | ✅      |
| Input Validation         | ✅      |
| Error Handling           | ✅      |
| Environment Variables    | ✅      |
| Clean Folder Structure   | ✅      |

---

## Author

**Sumit Kumar**

GitHub: https://github.com/SumitTr96

Full Stack Developer (MERN Stack)

Specializing in React, TypeScript, Node.js, Express, MongoDB, and modern web application development.
