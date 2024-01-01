import React, { useState } from "react";
// import { Container } from "@material-ui/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import { Container } from "@material-ui/core";
import LoginSignup from "../components/Login/LoginSignup";



export default function HomePage() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };


  return (
    <div>
      <Header handleLoginClick={handleLoginClick}/>
      <Container>
        <Body />
        <LoginSignup isShowLogin={isShowLogin} />
      </Container>
      <Footer />
    </div>
  );
}
