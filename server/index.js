import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import hotels from './routers/hotels.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://admin:OcdtEybNGhQvPXu4@cluster0.798wvxu.mongodb.net/Booking';
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors());

app.use('/hotels', hotels);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    }).catch(err => {
        console.log('error', err);
    })

