import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "@material-ui/lab";
import "../styles.scss";
import CustomCard from "../../../components/Card/CustomCard";
RightListBook.propTypes = {};

function RightListBook(props) {
  return (
    <div className="root">
      <div className="product-show-option">
        <div className="row" style={{ display: "none" }}>
          <div className="col-lg-7 col-md-7">
            <div className="select-option">
              <select className="sorting">
                <option value="">Default Sorting</option>
              </select>
              <select className="p-show">
                <option value="">Show:</option>
              </select>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 text-right">
            <p>Show 01- 09 Of 36 Product</p>
          </div>
        </div>
      </div>
      <div className="product-list">
        <div className="row">
          {Array.from(new Array(20)).map((x, index) => (
            <CustomCard />
          ))}
        </div>
      </div>
      <div className="pagination">
        <Pagination count="12" color="primary" />
      </div>
    </div>
  );
}

export default RightListBook;
