import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    hotel: {
        type: String,
        required: true
    },
    History:{
        type: String,
        required: true
    },
}, {timestamps: true});

export const customerModel = mongoose.model('customer', schema);