import React from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import visa from "../Image/visa.png";
import bsmart from "../Image/bsmart.png";
import onepay from "../Image/onepay.png";
import vietcomback from "../Image/vietcomback.png";
import momo from "../Image/momo.png";



export default function Footer() {
    return (
        <div className="footer">
            <div className="sb-footer section_padding">
                <div className="sb-footer-links">
                    <div className="sb-footer-links-div">
                        <h4>Doanh nghiệp</h4>
                        <a href="/">
                            <p>Cách đặt chỗ</p>
                        </a>
                        <a href="/">
                            <p>Liên hệ</p>
                        </a>
                        <a href="/">
                            <p>Trợ giúp</p>
                        </a>
                        <a href="/">
                            <p>Tuyển dụng</p>
                        </a>
                        <a href="/">
                            <p>Về chúng tôi</p>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Sản phẩm</h4>
                        <a href="/">
                            <p>Khách sạn</p>
                        </a>
                        <a href="/">
                            <p>Biệt thự</p>
                        </a>
                        <a href="/">
                            <p>Vé máy bay</p>
                        </a>
                        <a href="/">
                            <p>Đưa đón</p>
                        </a>
                        <a href="/">
                            <p>Combo tiết kiệm</p>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Đối tác</h4> 
                        <a href="/" className="sb-footer-links-logo">
                            <img src={visa} alt='visa' className="sb-footer-links-logo-img"/>
                        </a>
                        <a href="/" className="sb-footer-links-logo">
                            <img src={onepay} alt='onepay' className="sb-footer-links-logo-img"/>
                        </a>
                        <a href="/" className="sb-footer-links-logo">
                            <img src={bsmart} alt='bsmart' className="sb-footer-links-logo-img"/>
                        </a>
                        <a href="/" className="sb-footer-links-logo">
                            <img src={vietcomback} alt='vietcombank' className="sb-footer-links-logo-img"/>
                        </a>
                        <a href="/" className="sb-footer-links-logo">
                            <img src={momo} alt='momo' className="sb-footer-links-logo-img"/>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Khác</h4>
                        <a href="/">
                            <p>Yolo Blog</p>
                        </a>
                        <a href="/">
                            <p>Quy chế hoạt động</p>
                        </a>
                        <a href="/">
                            <p>Đăng kí nơi nghỉ</p>
                        </a>
                        <a href="/">
                            <p>Yolo quảng cáo</p>
                        </a>
                    </div>
                    <div className="sb-footer-link-media-div">
                        <h4>Theo dõi chúng tôi trên</h4>
                        <div className="social-container">
                            <a href="/" className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="2x"/>
                            </a>
                            <a href="/" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x"/>
                            </a>
                            <a href="/" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x"/>
                            </a>
                            <a href="/" className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                            </a>
                        </div>
                        
                    </div>
                </div>
                <hr></hr>
                <div className="sb-footer-below">
                    <div className="sb-footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Yolo. All right reserved.
                        </p>
                    </div>
                    <div className="sb-footer-below-links">
                        <a href="/"><div><p>Điều khoản & Điều kiện</p></div></a>
                        <a href="/"><div><p>Chính sách quyền riêng tư</p></div></a>
                        <a href="/"><div><p>Chính sách bảo mật</p></div></a>
                        <a href="/"><div><p>Chính sách Cookie</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}