import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import LeftListBook from "./components/LeftListBook";
import RightListBook from "./components/RightListBook";

ListBook.propTypes = {};

function ListBook(props) {
  return (
    <div>
      {/* <!-- Breadcrumb Section Begin --> */}
      <Breadcrumb />
      {/* <!-- Breadcrumb Section Begin --> */}

      {/* <!-- Product Shop Section Begin --> */}
      <div className="product-shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
              <LeftListBook />
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <RightListBook />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Product Shop Section End --> */}

      {/* <!-- Partner Logo Section Begin --> */}
      <div className="partner-logo">
        <div className="container">
          <div className="logo-carousel owl-carousel">
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="./assets/img/logo-carousel/logo-1.png" alt="" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="./assets/img/logo-carousel/logo-2.png" alt="" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="./assets/img/logo-carousel/logo-3.png" alt="" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="./assets/img/logo-carousel/logo-4.png" alt="" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="./assets/img/logo-carousel/logo-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Partner Logo Section End --> */}
    </div>
  );
}

export default ListBook;
