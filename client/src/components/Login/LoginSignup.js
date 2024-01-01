/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./LoginSignup.css";
import { postAccount } from "../../api";
import username_icon from "../../Assets/person.png";
import password_icon from "../../Assets/password.png";

export default function LoginSignup({isShowLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value  )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
    };


    return (
        <div className={`${isShowLogin ? "active" : ""} show`}>
            <div className="login-form">
                <div className="form-box solid">
                    <form onSubmit={handleSubmit}>
                        <h1 className="login-text">Sign In</h1>
                        <img src={username_icon} alt="username" />
                        <label>Username</label>
                        <br></br>
                        <input type="text" value={username} className="login-box" onChange={handleChangeUsername}/>
                        <br></br>
                        <img src={password_icon} alt="password" />
                        <label>Password</label>
                        <br></br>
                        <input type="password" value={password} className="login-box" onChange={handleChangePassword}/>
                        <br></br>
                        <input type="submit" value="LOGIN" className="login-btn"/>
                    </form>
                </div>
            </div>
        </div>

    )
}
