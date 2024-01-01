import axios from "axios";

const URL = 'http://localhost:5000';
axios.get(`${URL}/hotels`);
export const fetchHotels = () => {
    try {
        return axios.get(`${URL}/hotels`)
        .then(res => {
            const hotels = res.data;
            return hotels
        })
    } catch (error) {
        console.log(error)
    }
}

export const getHotel = (id) => {
    try {
        return axios.get(`${URL}/hotels/${id}`)
        .then(res => {
            const hotel = res.data;
            return hotel
        });
    } catch (error) {
        console.log(error);
    }
}

// export const postAccount = ( username, password) => {
//     try {
//         return axios.post(`${URL}/hello`, {username, password})
//         .then(res => {
//             console.log(res);
//             console.log(res.data);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }