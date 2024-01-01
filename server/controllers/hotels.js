import { HotelModel } from "../models/HotelModel.js"


export const getHotels = async (req, res) => {
    try {
        const hotels = await HotelModel.find();
        console.log('hotels', hotels);
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json({error:err});
    }
};

export const getHotel = async (req, res) => {
    try {
        let id = req.params.id;
        const hotel = await HotelModel.findOne({'_id':id});
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json({error:err});
    }
};

export const createHotels = (req, res) => {
    res.send('Create success');
}

