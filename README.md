# 🚗 Car Store API

The **Car Store API** is a backend service designed to manage car products, process customer orders, and handle inventory management efficiently. This API allows users to manage car details, process orders, update stock levels, and calculate revenue. It’s suitable for small car dealerships or larger e-commerce platforms.

---

## 📑 Table of Contents

1. [About the Project](#about-the-project)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
5. [Environment Variables](#environment-variables)  
6. [Running the Project](#running-the-project)  
7. [API Endpoints](#api-endpoints)  
8. [Example Request Payloads](#example-request-payloads)  

---

## 🎯 About the Project

The **Car Store API** provides backend functionality for managing car products and handling customer orders. It allows users to:

- Manage a collection of cars with properties such as name, brand, price, category, description, and stock availability.
- Process customer orders, reducing the car stock automatically after each purchase.
- Prevent orders if stock is insufficient.
- Calculate total revenue from completed orders.

---

## 🚀 Features

### 🔹 Car Management
- Add, update, retrieve, and delete car products.
- Search cars by **name**, **brand**, or **category** using query parameters.

### 🔹 Order Management
- Place orders with customer details, car selection, and quantity.
- Automatically update car stock after each successful order.
- Prevent orders if the selected car is out of stock.

### 🔹 Revenue Calculation
- Calculate total revenue based on the total sales price of all completed orders.

### 🔹 Inventory Management
- Automatically update the `inStock` field to `false` when stock reaches zero.
- Prevent placing orders when stock is unavailable.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **ORM**: Mongoose  
- **API Testing**: Postman
- **Deployment**: Vercel or any Node.js hosting service  

---

## 🏁 Getting Started

To set up the project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/diptomahin/car-store.git
cd car-store
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
```bash
PORT=5000  # The port number for the API
DATABASE_URL=your_mongodb_connection_url  # MongoDB connection URL
```
## 📦 Running the Project

Start the development server using the following command:

```bash
npm run dev
```
## 🔧 API Endpoints
```bash
| Method | Endpoint                | Description                     |
|--------|-------------------------|---------------------------------|
| POST   | `/api/cars`              | Add a new car                   |
| GET    | `/api/cars`              | Retrieve all cars               |
| GET    | `/api/cars/:id`          | Retrieve a single car by ID     |
| PUT    | `/api/cars/:id`          | Update a car by ID              |
| DELETE | `/api/cars/:id`          | Delete a car by ID              |
| POST   | `/api/orders`            | Place an order                  |
| GET    | `/api/orders/revenue`    | Get total revenue               |
| GET    | `/api/orders`            | Retrieve all orders             |

```
## 🛠️ Example Request Payloads

### 🔸 Add a Car
```json
{
  "name": "Camry",
  "brand": "Toyota",
  "price": 30000,
  "category": "Sedan",
  "description": "A modern, reliable sedan.",
  "quantity": 10,
  "inStock": true
}
```
### 🔸 Place an Order
```json
{
  "email": "customer@example.com",
  "car": "6650b1e9b8c3d75b98a63b14",
  "quantity": 2,
  "totalPrice": 60000
}
```
