/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Style.css";
import { bookroom } from '../../smart_contract/bookroom';



export default function Infor_booking({ isShowBooking , priceString, setIsShowBooking}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeUsername = (e) => {
        setName(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPhone(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name);
        console.log(phone);
        console.log(email);
        
    };

    const handleButtonClick = async () => {
        setIsShowBooking(false)
        await bookroom(priceString);
    }


    return (

        <div className={`${isShowBooking ? "active" : ""} show`}>
            <div className="booking-form">
                <div className="form-box-booking solid">
                    <form onSubmit={handleSubmit}>
                        <h1 className="booking-text">THÔNG TIN KHÁCH HÀNG</h1>
                        <label>Họ và Tên</label>
                        <input type="text" value={name} className="booking-box" placeholder="VD: Nguyễn Văn A" onChange={handleChangeUsername} />
                        <br></br>
                        <label>Số điện thoại</label>
                        <input type="text" value={phone} className="booking-box" placeholder="Nhập số điện thoại của bạn" onChange={handleChangePassword} />
                        <br></br>
                        <label>Email</label>
                        <input type="text" value={email} className="booking-box" placeholder="Nhập Email của bạn" onChange={handleChangeEmail} />
                        <br></br>                       
                        <input onClick={handleButtonClick} type="submit" value="ĐẶT NGAY" className="booking-btn"/>
                    </form>
                </div>
            </div>
        </div>

    );
}

