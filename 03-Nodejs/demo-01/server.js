import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();

// Middlewares
app.use(cors());

const PORT = process.env.PORT || 3002;

// Routes || Endpoints || Request URLs
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