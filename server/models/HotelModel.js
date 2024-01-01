import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: false
    },
}, {timestamps: true});

export const HotelModel = mongoose.model('Hotel', schema);