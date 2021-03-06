import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Link } from "react-router-dom";

CustomHeader.propTypes = {};

function CustomHeader(props) {
  return (
    <div className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="ht-left">
            {/* <div className="mail-service">
              <i className=" fa fa-envelope"></i>
              hello.colorlib@gmail.com
            </div>
            <div className="phone-service">
              <i className=" fa fa-phone"></i>
              +65 11.188.888
            </div> */}
          </div>
          <div className="ht-right">
            <Link className="login-panel" to="/login">
              <i className="fa fa-user"></i>Login
            </Link>
            <div className="lan-selector" style={{ display: "none" }}>
              <select
                className="language_drop"
                name="countries"
                id="countries"
                style={{ width: 300 }}
              >
                <option
                  value="yt"
                  data-image="./assets/img/flag-1.jpg"
                  data-imagecss="flag yt"
                  data-title="English"
                >
                  English
                </option>
                <option
                  value="yu"
                  data-image="./assets/img/flag-2.jpg"
                  data-imagecss="flag yu"
                  data-title="Bangladesh"
                >
                  German{" "}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="inner-header">
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <div className="logo">
                <a href="./index.html">
                  <img src="../assets/img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="advanced-search">
                {/* <button type="button" className="category-btn">
                  All Categories
                </button> */}
                <div className="input-group">
                  <input type="text" placeholder="What do you need?" />
                  <button type="button">
                    <i className="ti-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-right col-md-3">
              <ul className="nav-right">
                <li className="heart-icon">
                  <a href="#">
                    <i className="icon_heart_alt"></i>
                    <span>1</span>
                  </a>
                </li>
                <li className="cart-icon">
                  <a href="#">
                    <i className="icon_bag_alt"></i>
                    <span>3</span>
                  </a>
                  <div className="cart-hover">
                    <div className="select-items">
                      <table>
                        <tbody>
                          <tr>
                            <td className="si-pic">
                              <img
                                src="../assets/img/select-product-1.jpg"
                                alt=""
                              />
                            </td>
                            <td className="si-text">
                              <div className="product-selected">
                                <p>$60.00 x 1</p>
                                <h6>Kabino Bedside Table</h6>
                              </div>
                            </td>
                            <td className="si-close">
                              <i className="ti-close"></i>
                            </td>
                          </tr>
                          <tr>
                            <td className="si-pic">
                              <img
                                src="../assets/img/select-product-2.jpg"
                                alt=""
                              />
                            </td>
                            <td className="si-text">
                              <div className="product-selected">
                                <p>$60.00 x 1</p>
                                <h6>Kabino Bedside Table</h6>
                              </div>
                            </td>
                            <td className="si-close">
                              <i className="ti-close"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="select-total">
                      <span>total:</span>
                      <h5>$120.00</h5>
                    </div>
                    <div className="select-button">
                      <a href="#" className="primary-btn view-card">
                        VIEW CARD
                      </a>
                      <a href="#" className="primary-btn checkout-btn">
                        CHECK OUT
                      </a>
                    </div>
                  </div>
                </li>
                <li className="cart-price">$150.00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-item">
        <div className="container">
          <div className="nav-depart">
            <div className="depart-btn">
              <i className="ti-menu"></i>
              <span>Th??? lo???i</span>
              <ul className="depart-hover">
                <li className="active">
                  <a href="#">Ng??n t??nh</a>
                </li>
                <li>
                  <a href="#">Kinh t???</a>
                </li>
              </ul>
            </div>
          </div>
          <nav className="nav-menu mobile-menu">
            <ul>
              <li className="active">
                <a href="./index.html">Trang ch???</a>
              </li>
              <li>
                <Link to="list">Danh s??ch</Link>
              </li>
              <li>
                <Link to="/upload">Upload Book</Link>
              </li>

              <li>
                <a href="./contact.html">Li??n h???</a>
              </li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
    </div>
  );
}

export default CustomHeader;
