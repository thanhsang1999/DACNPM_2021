import React from "react";
import PropTypes from "prop-types";

CustomFooter.propTypes = {};

function CustomFooter(props) {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-left">
              <div className="footer-logo">
                <a href="#">
                  <img src="./assets/img/footer-logo.png" alt="" />
                </a>
              </div>
              <ul>
                <li>Team AWESOME</li>
                <li>Phone: +84370 509 4399</li>
                <li>Email: 11111@st.hcmuaf.edu.vn</li>
              </ul>
              <div className="footer-social">
                <a href="https://fb.com">
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1"></div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <div className="newslatter-item">
              <h5>Email</h5>
              <p>Nhập email để có thông tin mới nhất từ chúng tôi</p>
              <form action="#" className="subscribe-form">
                <input type="text" placeholder="Enter Your Email" />
                <button type="button">Đăng kí</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-reserved">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-text"></div>
              <div className="payment-pic">
                <img src="./assets/img/payment-method.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomFooter;
