import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="ag-format-container">
      <div className="ag-courses_box">
        <div className="ag-courses_item">
          <div className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>
            <div className="ag-courses-item_title">Frontend Developer</div>
            <div className="ag-courses-item_date-box">Tuhin Poddar</div>
            <div className="ag-courses-item_date-box">
              React.js MongoDB Redis Postgress
            </div>
            <div className="ag-courses-item_date-box">
              Kolkata
              <span className="ag-courses-item_date"> 0.5Y Exp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
