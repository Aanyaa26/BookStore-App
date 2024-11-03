# Bookstore Website 📚

This project is a full-stack bookstore website where users can browse a variety of books, view pricing, and create an account to manage purchases. Built with **ReactJS** for the frontend and **MongoDB** for the backend, this site allows users to sign up, log in, and securely manage their orders and profile.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Future Enhancements](#future-enhancements)
- [Screenshots](#screenshots)
- [References](#references)

---

## Overview

This bookstore website enables users to:
- Browse books with pricing details.
- View detailed information about each book.
- Sign up and log in to their accounts.
- Add books to their shopping cart and make purchases.
- Admins can manage inventory and oversee user activity.

---

## Features

### User Features
- **Book Browsing:** Explore a wide range of books with categories and price listings.
- **Detailed Book Pages:** Each book has a dedicated page with detailed information including price, description, and author.
- **Authentication:** Secure sign-up and login for user accounts.
- **User Dashboard:** Users can view order history and update profile information.

### Admin Features
- **Inventory Management:** Admins can add, edit, and delete book listings.
- **Order Overview:** Admins can view and manage user orders.
- **User Management:** Admin access to view and manage registered users.

---

## Tech Stack

- **Frontend:** ReactJS, Tailwind CSS (or Bootstrap)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT) for secure user sessions
- **State Management:** Redux for managing global state (optional)

---

## Project Structure

```
Bookstore-Website/
├── client/                   # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Pages for different routes (Home, BookDetail, Login, etc.)
│   │   ├── services/         # API services for backend calls
│   │   ├── App.js            # Main App component
│   │   └── index.js          # React entry point
├── server/                   # Backend application
│   ├── config/               # Database and environment configurations
│   ├── controllers/          # Controller functions for handling requests
│   ├── models/               # Mongoose schemas and models
│   ├── routes/               # API route handlers
│   ├── middleware/           # JWT auth middleware
│   └── server.js             # Express entry point
├── README.md
└── package.json              # Dependency manager
```

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/username/Bookstore-Website.git
   cd Bookstore-Website
   ```

2. **Install dependencies:**

   - Backend:

     ```bash
     cd server
     npm install
     ```

   - Frontend:

     ```bash
     cd ../client
     npm install
     ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables)).

4. **Run the application:**

   - Backend:

     ```bash
     cd ../server
     npm start
     ```

   - Frontend:

     ```bash
     cd ../client
     npm start
     ```

   The website will be running at `http://localhost:3000`.

---

## Environment Variables

Create a `.env` file in the `server` directory with these variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## Usage

1. **Sign Up / Log In:** Users can create an account or log in with an existing account.
2. **Browse and Purchase Books:** Explore books, view pricing, and add items to the cart.
3. **Account Dashboard:** After logging in, users can view their order history and manage profile details.
4. **Admin Panel:** Admins can log in to manage books and view user orders.

---

## API Endpoints

| Endpoint             | Method | Description                        |
|----------------------|--------|------------------------------------|
| `/api/books`         | GET    | Fetch a list of all books         |
| `/api/books/:id`     | GET    | Get details of a specific book    |
| `/api/auth/register` | POST   | Register a new user               |
| `/api/auth/login`    | POST   | Log in a user                     |
| `/api/orders`        | POST   | Place a new order                 |
| `/api/admin/books`   | POST   | Add a new book (admin only)       |
| `/api/admin/orders`  | GET    | Get a list of all orders (admin)  |

---

## Future Enhancements

- **User Reviews:** Allow users to leave reviews on books.
- **Wishlist:** Add functionality for users to save books to a wishlist.
- **Admin Analytics Dashboard:** Display trends and analytics for inventory and sales.
- **Payment Gateway Integration:** Integrate a payment service for seamless transactions.

---

## Screenshots

*(Add screenshots of key pages like the homepage, book detail page, login page, and admin dashboard)*

---

## References

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [JWT Documentation](https://jwt.io/introduction/)

---

 
