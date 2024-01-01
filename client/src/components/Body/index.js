import React, { useEffect, useState } from "react";
import "./Style.css";
import { fetchHotels } from "../../api";
import { useNavigate  } from "react-router-dom";
import { Grid } from "@material-ui/core";
import PostCard from "./PostCard";


export default function Body() {
    const  navigate  = useNavigate ();
    const [hotelList , setHotelList] = useState([]);

    useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        const hotels = await fetchHotels();
        setHotelList(hotels);
    };

    const gotoDetail = (hotel)=>{
        navigate(`/${hotel._id}`);
    };

    return (
        <Grid container spacing={2} alignContent="stretch">
            {hotelList.map((hotel) => (
                <Grid item xs={12} sm={4} onClick={()=> gotoDetail(hotel)}>
                    <PostCard key={hotel._id} hotel={hotel}/>
                </Grid>
                ))}
        </Grid>
    );
}