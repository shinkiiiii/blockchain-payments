import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const pageStyle = {
    textAlign: "justify",
  };

export default function IntroductionPage(props) {
    return (
        <div>
        <Header />
            <Container>
            <div id="tvt_content">
                <h1 className={pageStyle}>Giới thiệu về Yolo.com</h1>
                <p>&nbsp;</p>
                <p className={pageStyle}>Thành lập năm 2010, <strong>Yolo.com</strong> là thành viên của <strong>Tập đoàn TMG Việt Nam</strong> với hơn 20 năm kinh nghiệm trong lĩnh vực Du lịch - Khách sạn. <strong>iVIVU.com</strong> tiên phong trong việc sáng tạo các sản phẩm du lịch tiện ích dành cho khách hàng nội địa. Liên tục tăng trưởng mạnh qua nhiều năm, Yolo.com hiện là OTA hàng đầu Việt Nam trong phân khúc cao cấp với hệ thống khoảng 2,500 khách sạn tại Việt Nam &amp; hơn 30,000 khách sạn quốc tế.</p>
                <p className={pageStyle}><br></br>Với mục tiêu mang đến cho khách hàng <strong>“Trải nghiệm kỳ nghỉ tuyệt vời”</strong>, <strong>Yolo.com</strong> kỳ vọng trở thành nền tảng du lịch nghỉ dưỡng số 1 cho khách hàng Đông Nam Á trong 5 năm tới.</p>
                <p className={pageStyle}><br></br>Dòng sản phẩm chính của Yolo là <strong>Combo du lịch</strong> - sản phẩm cung cấp đầy đủ cho một kỳ nghỉ bao gồm phòng khách sạn, vé máy bay, đưa đón, ăn uống, khám phá,… chỉ trong 1 lần đặt. Với combo du lịch khách hàng không cần băn khoăn chọn lựa hoặc mất thời gian đặt từng dịch vụ riêng lẻ, lại còn hưởng được mức giá vô cùng tốt với những dòng combo Yolo.com mang lại: <strong>combo tiết kiệm, voucher độc quyền, ưu đãi đặt sớm và flash sales</strong>.</p>
                <p className={pageStyle}><br></br>Để đảm bảo cho khách hàng một <strong>“Trải nghiệm kỳ nghỉ tuyệt vời”</strong>, chúng tôi áp dụng công nghệ vào việc đọc hiểu nhu cầu của thị trường, nghiên cứu phát triển sản phẩm và gợi ý những sản phẩm và dịch vụ tốt nhất, phù hợp với từng khách hàng.</p>
                <p className={pageStyle}><br></br>Khách hàng chọn đặt dịch vụ với Yolo.com có thể đặt qua rất nhiều kênh: <strong>đặt trực tiếp tại website, gọi điện thoại Hotline, đặt qua chat bot, app, đặt qua Facebook và các mạng xã hội khác</strong>. Với Yolo.com mỗi kỳ nghỉ là một trải nghiệm tuyệt vời!</p>
                <p className={pageStyle}><strong>Vui lòng liên hệ:</strong></p>
                <p className={pageStyle}>1. Dịch vụ khách hàng, đặt phòng khách sạn: Hotline <strong>1900 1870</strong>&nbsp;- Email: <a href="/">TC@Yolo.com</a></p>
                <p className={pageStyle}>2. Nhà cung cấp liên hệ - Email: <a href="mailto:52000756@student.tdtu.edu.vn">Market@Yolo.com</a></p>
                <p className={pageStyle}>3. Liên hệ Marketing - Email: <a href="mailto:kinht99@gmail.com">marketing@Yolo.com</a></p>
                <p className={pageStyle}>4. Các liên hệ khác:&nbsp;<strong>1900 1870</strong></p>
            </div>
            </Container>
            <Footer />
        </div>
    );
}

