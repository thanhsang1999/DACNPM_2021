import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CustomCard.propTypes = {};

function CustomCard(props) {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="product-item">
        <div className="pi-pic">
          <img src="./assets/img/products/product-1.jpg" alt="" />
          <div className="icon">
            <i className="icon_heart_alt"></i>
          </div>
          <ul>
            <li className="quick-view">
              <Link to="/">See more</Link>
            </li>
          </ul>
        </div>
        <div className="pi-text">
          <div className="catagory-name">Ngôn tình</div>
          <a href="#">
            <h5>Đồi gió hú</h5>
          </a>
          <div className="product-price">Nguyễn Du</div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
