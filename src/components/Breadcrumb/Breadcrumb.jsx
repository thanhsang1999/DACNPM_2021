import React from "react";
import PropTypes from "prop-types";

Breadcrumb.propTypes = {};

function Breadcrumb(props) {
  return (
    <div className="breacrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text">
              <a href="#">
                <i className="fa fa-home"></i> Home
              </a>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
