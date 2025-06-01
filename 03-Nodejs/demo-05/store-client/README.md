# 🛍️ Store Frontend (React)

This is the **frontend** for a simple store web application built with **React + Vite**.

## 🎯 Description

The app allows two types of users:

- 👤 **Regular users**: 
  - View products
  - Add products to their cart
- 🛠️ **Admins**:
  - Add new products
  - Edit existing products
  - Delete products

Login and signup are included with a basic role-based flow (user/admin). Data is persisted in the backend via PostgreSQL.

## 🧑‍💻 User Requirements

1. **Login or Sign Up** with an email and password
2. On sign up, choose your role: `user` or `admin`
3. **Admin** users:
   - Can create, edit, and delete products
4. **Regular** users:
   - Can only view products and add them to their cart
5. The app remembers login sessions using `localStorage`

## 🛠️ Technologies

- React 18
- Vite
- Fetch API
- LocalStorage (for session persistence)

## 🚀 Getting Started

```bash
cd store-client
npm install
npm run dev
