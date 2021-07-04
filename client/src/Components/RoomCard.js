import React from "react";
import "../Styles/RoomCard.css";

const RoomCard = ({ heading, text }) => {
  return (
    <div className="cont shadow">
      <div className="cont2">
        <div className="bg-primary" id="rod1"></div>
        <div className="content-cont ">
          <p className="fw-bold">{heading}</p>
          {text.substr(0, 40) + "..."}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
