import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/connectDB.js';
import User from './models/User.js';
import Article from './models/Article.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const MongoDB_URI = process.env.MONGO_URI

app.use(express.json());



connectDB(MongoDB_URI, app, PORT)