# 🧠 Store Backend (Express + PostgreSQL)

This is the **backend** for the fullstack store app. It provides APIs for authentication, products, and user carts.


## 🏗️ Tech Stack

- Node.js + Express
- PostgreSQL (via `pg`)
- `dotenv`, `cors`, `morgan`


## 🚀 Getting Started

```bash
# 1. Install dependencies
cd store-server
npm install

# 2. Create a PostgreSQL database (e.g., `storedb`)

# 3. Start PostgreSQL and create DB
psql -d storedb -f schema.sql

# 4. Start the server
node server.js
```


## 🗂️ Project Structure
```
store-server/
├── routes/
│ ├── auth.js # signup & login
│ ├── products.js # admin CRUD
│ └── users.js # cart endpoints
├── middleware/
│ └── adminAuth.js # role-based guard
├── schema.sql # DB schema
├── db.js # pg client
└── server.js # app entry
```


## 📡 API Endpoints

The API will run on: http://localhost:5000

### 🔐 Auth Routes

**Base URL**: `/api/auth`

| Method | Endpoint     | Description        |
|--------|--------------|--------------------|
| POST   | `/signup`    | Register new user  |
| POST   | `/login`     | Log in existing user |

#### 🔸 POST `/api/auth/signup`

Registers a new user (admin or user role).

```json
{
  "email": "admin@example.com",
  "password": "123456",
  "role": "admin"
}
```

#### 🔸 POST /api/auth/login

Logs in an existing user.
```json
{
  "email": "admin@example.com",
  "password": "123456"
}
```


### 📦 Product Routes

**Base URL**: `/api/products`

| Method | Endpoint     | Description        |
|--------|--------------|--------------------|
| GET    | `/`          | Get all products  |
| POST   | `/`          | Add a new product |
| PUT    | `/:id`       | Update product by ID |
| DELETE | `/:id`       | Delete product by ID |

🔐 Admin requests must include:
```json
{"x-role": "admin"}
```

#### 🔸 POST /api/products
```json
{
  "name": "Gaming Mouse",
  "price": 49
}
```

#### 🔸 PUT /api/products/:id
```json
{
  "name": "Updated Name",
  "price": 60
}
```

#### 🔸 DELETE /api/products/:id
```
No request body needed. Just the product ID and x-role: admin header.
```


### 🛒 Cart Routes

**Base URL**: `/api/users/cart`

| Method | Endpoint     | Description        |
|--------|--------------|--------------------|
| POST   | `/`          | Add product to user’s cart  |
| POST   | `/:email`    | Get cart items by user email |


#### 🔸 POST /api/users/cart
```json
{
  "email": "user@example.com",
  "product_id": 1
}
```

#### 🔸 GET /api/users/cart/:email
```
Returns a list of product objects in the user's cart.
```


