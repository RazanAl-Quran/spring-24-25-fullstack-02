import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

// Routes || Endpoints || Request URLs

app.use('/api/users',userRoutes);

// localhost:3001/
app.get("/",(req,res)=>{
    res.send('home route');
})


// localhost:3001/test
app.get('/test',(request,response)=>{
    response.send('test route response');
})

app.use(()=>{
    res.json({message: "route not found"});
});


app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
});


// 1- repo (gitignore Node)
// 2- clone
// 3- cd repo-name 
// 4- code .
// 5- create server.js
// 6- npm init -y
// 7- server setup