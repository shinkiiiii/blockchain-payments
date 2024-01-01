import React from "react";
import {Button, Card, CardContent, CardHeader, Typography} from "@material-ui/core"
import "./Style.css";


export default function PostCard({hotel}) {
    return (
        <Card className="cardStyle">
            <CardHeader className="cardHeader" title={hotel.title} subheader={hotel.location} />
            <img src={hotel.image} alt="anh"/>
            <CardContent>
                <Typography variant="h5" style={{ color: 'green' ,fontWeight: "bold"}}>{hotel.price}</Typography>
                <Typography style={{display: "flex", justifyContent: "flex-end"}}>
                    <Button variant="contained" style={{ backgroundColor: 'green', color: 'white', fontWeight: 'bold'}}>Đặt phòng</Button>
                </Typography>
            </CardContent>
        </Card>
    )
}