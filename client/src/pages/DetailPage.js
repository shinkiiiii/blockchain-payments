/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { getHotel } from "../api";
import { Button, Container } from "@material-ui/core";
import "./DetailPage.css";
import { FaStar } from "react-icons/fa";
import Favorite, {} from "@material-ui/icons/Favorite";
import { FaLocationDot } from "react-icons/fa6";
import {bookroom} from "../smart_contract/bookroom.js";
import LoginSignup from "../components/Login/LoginSignup";
import Infor_booking from "../components/Infor_booking/Infor_booking.js";



export default function DetailPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const res = await getHotel(id);
    setHotel(res);
  };

  const [isShowBooking, setIsShowBooking] = useState(true);

  const handleButtonClick = () => {
    setIsShowBooking((isShowBooking) => !isShowBooking);
  }

  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  const price = hotel?.price || "";

  const renderDetail = ()=> (
    <Container>
    <div className="hotel-item">
      <div className="left">
        <img src={hotel.image} alt="screen"/>
      </div>
      <div className="center">
        <h1>{hotel.title}</h1>
        <p>
          <span className="star">
          {[...Array(5)].map(star => {
            return (
              <FaStar size={30}/>
            )
          })}
          </span>
          <span className="heart">
            <Favorite />
          </span>
        </p>
        <div>
          <span>
            <FaLocationDot />
          </span>
          <span>
            {hotel.location}
          </span>
        </div>
        <p>Trái tim của khu nghỉ dưỡng là bể bơi trung tâm tràn bờ rộng 5.000 m2 với nhiều cấp độ thoải dần ra phía biển. Từ mép nước hồ bơi, cảm giác với tay ra là có thể chạm vào biển cả.</p>
        <p>Từ khu nghỉ dưỡng, Quý khách có thể khám phá thiên đường biển đảo Nam Phú Quốc từ trên cao với cáp treo Hòn Thơm, và tận hưởng những phút giây thư giãn sôi động tại tổ hợp vui chơi giải trí biển Sun World Hon Thom Nature Park.</p>
      </div>
      <div className="right">
        <span className="price">
          {hotel.price}
        </span>
        <Button onClick={handleButtonClick} style={{ backgroundColor: 'green', color: 'white', fontWeight: 'bold'}}>Đặt ngay</Button>
      </div>
      
    </div>
      <div dangerouslySetInnerHTML={{ __html: hotel.content }} />
    </Container>
  )
  return (
    <div>
      <Header handleLoginClick={handleLoginClick}/>
      {
        hotel && (
          renderDetail()
        )      
      }
      <LoginSignup isShowLogin={isShowLogin} />
      <Infor_booking isShowBooking={isShowBooking} priceString={price} setIsShowBooking={setIsShowBooking}/>
      <Footer />
    </div>
  );
}
