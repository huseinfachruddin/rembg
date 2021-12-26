import express from "express";
import Router from "./routes/routes.js";
import cors from 'cors'
const app = express() 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static('images'));
app.use(Router);


export default app;