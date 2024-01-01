import express from 'express';
import { getHotels, createHotels, getHotel } from  '../controllers/hotels.js';

const router = express.Router();

// gọi các hoạt động từ controller

router.get('/', getHotels);

router.get('/:id', getHotel);

router.post('/', createHotels);

export default router;