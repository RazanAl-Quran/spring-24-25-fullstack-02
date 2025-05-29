// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/users.js';
// import pgclient from './db.js';
import pgclient from './db.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

// Routes || Endpoints || Request URL

// user routes
app.use("/api/users", userRoutes);
// app.get("/api/users/test",(req,res)=>{
// })

// home route
// localhost:3001/
app.get("/", (req, res) => {
    res.send("Welcome to your first API server")
})


// not found route
app.use((req, res) => {
    res.json({ message: "🚫 Route not found" });
})

// localhost:3001/test
app.get("/test", (request, response) => {
    console.log('hello from test console');
    // response.send('This is a test route');
    response.json({ test: "test test" });
})

pgclient.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on PORT ${PORT}`);

        });
    })