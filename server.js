import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/connectDB.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const MongoDB_URI = process.env.MONGO_URI

app.use(express.json());

connectDB(MongoDB_URI, app, PORT)